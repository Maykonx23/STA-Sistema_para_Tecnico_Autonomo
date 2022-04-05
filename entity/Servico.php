<?php


    class Servico{
        protected $id_servico;
        private $titulo;
        private $mediaTempo;
        private $descricao;
        private Tecnico $tecnico_id;

	public function getId_servico() {
		return $this->id_servico;
	}

	public function setId_servico($id_servico) {
		$this->id_servico = $id_servico;
	}

	public function getTitulo() {
		return $this->titulo;
	}

	public function setTitulo( $titulo) {
		$this->titulo = $titulo;
	}

	public function getMediaTempo() {
		return $this->mediaTempo;
	}

	public function setMediaTempo($mediaTempo) {
		$this->mediaTempo = $mediaTempo;
	}

	public function getDescricao() {
		return $this->descricao;
	}

	public function setDescricao( $descricao) {
		$this->descricao = $descricao;
	}
	public function getTecnicoId() {
		return $this->tecnico_id;
	}

	public function setTecnicoId(Tecnico $tecnico_id) {
		$this->tecnico_id = $tecnico_id;
	}


    }