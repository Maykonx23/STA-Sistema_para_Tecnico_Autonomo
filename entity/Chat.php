<?php


    class Chat{
        protected $id_chat;
        private $descricao;
        private $cliente;
        private $tecnico;

	public function getId_chat() {
		return $this->id_chat;
	}

	public function setId_chat($id_chat) {
		$this->id_chat = $id_chat;
	}

	public function getDescricao() {
		return $this->descricao;
	}

	public function setDescricao( $descricao) {
		$this->descricao = $descricao;
	}

	public function getCliente() {
		return $this->cliente;
	}

	public function setcliente( $cliente) {
		$this->cliente = $cliente;
	}
	public function getTecnico() {
		return $this->tecnico;
	}

	public function setTecnico($tecnico) {
		$this->tecnico = $tecnico;
	}


    }