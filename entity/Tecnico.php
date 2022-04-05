<?php
class Tecnico{
    private $id_tec;
    private $descricao;
    protected Servico $servico_id;
    protected Usuario $cliente_id;

	public function getId_tec() {
		return $this->id_tec;
	}

	public function setId_tec( $id_tec) {
		$this.$id_tec = $id_tec;
	}

	public function getDescricao() {
		return $this->descricao;
	}

	public function setDescricao($descricao) {
		$this.$descricao = $descricao;
	}
/*
	public Servico getId_s() {
		return this.$id_s;
	}

	public void setId_s(Servico $id_s) {
		$this->id_s = $id_s;
	}

	public usuario getId_c() {
		return $this->id_c;
	}

	public void setId_c(usuario $id_c) {
		this->id_c = $id_c;
	}
*/

    

}