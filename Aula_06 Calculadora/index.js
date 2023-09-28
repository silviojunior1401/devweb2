const { createApp } = Vue;

createApp({
	data() {
		return {
			display: "0",
			numeroAtual: null,
			numeroAnterior: null,
			operador: null,
		};
	},
	methods: {
		handleButton: function (value) {
			switch (value) {
				case "+":
				case "-":
				case "*":
				case "/":
					this.handleOperador(value);
					break;
				case "=":
					this.handleIgual(value);
					break;
				case ".":
					this.handleDecimal(value);
					break;
				default:
					this.handleNumeros(value);
					break;
			}
		},

		handleOperador: function (operador) {
			if (!this.numeroAnterior && this.numeroAtual) {
				this.numeroAnterior = this.numeroAtual;

				this.numeroAtual = null;
				this.operador = operador;
			}
		},

		handleIgual: function (igual) {
			switch (this.operador) {
				case "+":
					this.display = (
						this.numeroAnterior + this.numeroAtual
					).toString();
					break;
				case "-":
					this.display = (
						this.numeroAnterior - this.numeroAtual
					).toString();
					break;
				case "*":
					this.display = (
						this.numeroAnterior * this.numeroAtual
					).toString();
					break;
				case "/":
					this.display = (
						this.numeroAnterior / this.numeroAtual
					).toString();
					break;
				default:
					break;
			}

			this.numeroAtual = Number(this.display);
			this.numeroAnterior = null;
			this.operador = null;
		},

		handleDecimal: function (decimal) {
			if (!this.display.includes(".")) {
				this.display += decimal;
			}
		},

		handleNumeros: function (numero) {
			if (!this.numeroAtual) {
				this.display = "";
			} else if (this.display === "0") {
				this.display = "";
			}

			this.display += numero.toString();

			this.numeroAtual = Number(this.display);
		},

		handleLimpar: function () {
			this.display = "0";
			this.numeroAtual = null;
			this.numeroAnterior = null;
			this.operador = null;
		},
	},
}).mount("#app");
