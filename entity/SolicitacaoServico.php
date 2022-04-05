
<?php
    class SolicitacaoServico{
        private $id_Solicitacao;
        private $status;
        private $validacao;
        protected Chat $chat_id;
        protected Tecnico $tecnico_id;
        protected Servico $servico_id;
        protected Usuario $cliente_id;

	public function getId_Solicitacao() {
		return $this->id_Solicitacao;
	}

	public function setId_Solicitacao($id_Solicitacao) {
		$this->id_Solicitacao = $id_Solicitacao;
	}

	public function getStatus() {
		return $this->status;
	}

	public function setStatus($status) {
		$this->status = $status;
	}

	public function getValidacao() {
		return $this->validacao;
	}

	public function setValidacao($validacao) {
		$this->validacao = $validacao;
	}

	public function getChat_id() {
		return $this->chat_id;
	}

	public function setChat_id( $chat_id) {
		$this->chat_id = $chat_id;
	}

	public function getTecnico_id() {
		return $this-> tecnico_id;
	}

	public function setTecnico_id($tecnico_id) {
		$this->tecnico_id = $tecnico_id;
	}


        public function getServico_id(){
            return $this-> servico_id;
        }
        public function setServico_id($servico_id){
            $this->servico_id = $servico_id;
        }
        public function getCliente_id(){
            return $this-> cliente_id;
        }
        public function setCliente_id($cliente_id){
            $this->cliente_id = $cliente_id;
        }
        
    }
