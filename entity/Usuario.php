
<?php
    class Usuario{
        private $id_usuario;
        private $nome;
        private $email;
        private $senha;
        private $cpf;
        private $data_nasc;
        private $telefone;
        private $nivel;
        protected Endereco $ender;

	public function getSenha() {
		return $this->senha;
	}

	public function setSenha($senha) {
		$this->senha = $senha;
	}

	public function getCpf() {
		return $this->cpf;
	}

	public function setCpf($cpf) {
		$this->cpf = $cpf;
	}

	public function getData_nasc() {
		return $this->data_nasc;
	}

	public function setData_nasc($data_nasc) {
		$this->data_nasc = $data_nasc;
	}

	public function getTelefone() {
		return $this->telefone;
	}

	public function setTelefone( $telefone) {
		$this->telefone = $telefone;
	}

	public function getNivel() {
		return $this-> nivel;
	}

	public function setNivel($nivel) {
		$this->nivel = $nivel;
	}


        public function getId_usuario(){
            return $this-> id_usuario;
        }
        public function setId_usuario($id_usuario){
            $this->id_usuario = $id_usuario;
        }
        public function getNome(){
            return $this-> nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function getEmail(){
            return $this-> email;
        }
        public function setEmail($email){
            $this->email = $email;
        }
        
    }
