<?php
    class Endereco{
        private $id_endereco;
        private $cep;
        private $uf;
        private $cidade;
        private $bairro;
        private $rua;
        private $numero;
        private $complemento;

	public function getId_endereco() {
		return $this->id_endereco;
	}

	public function setId_endereco( $id_endereco) {
		$this->id_endereco = $id_endereco;
	}

	public function getCep() {
		return $this->cep;
	}

	public function setCep($cep) {
		$this->cep = $cep;
	}

	public function getUf() {
		return $this->uf;
	}

	public function setUf($uf) {
		$this->uf = $uf;
	}

	public function getCidade() {
		return $this->cidade;
	}

	public function setCidade( $cidade) {
		$this->cidade = $cidade;
	}

	public function getBairro() {
		return $this->bairro;
	}

	public function setBairro( $bairro) {
		$this->bairro = $bairro;
	}

	public function getRua() {
		return $this->rua;
	}

	public function setRua( $rua) {
		$this->rua = $rua;
	}

	public function getNumero() {
		return $this->numero;
	}

	public function setNumero($numero) {
		$this->numero = $numero;
	}

	public function getComplemento() {
		return $this->complemento;
	}

	public function setComplemento( $complemento) {
		$this->complemento = $complemento;
	}

    }
