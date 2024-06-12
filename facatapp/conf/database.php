<?php
class Database {
    private $host = "127.0.0.1";
    private $db = "dw2_actas";
    private $user = "root";
    private $password = "";
    private $conn;

    public function conectar() 
        {
            $this->conn=null;
            try {
                $this->conn= new mysqli($this->host, $this->user, $this->password, $this->db); 
                if ($this->conn->connect_error)
                {
                    throw new Exception('Error de conexión:', $this->conn->connect_error );
                }    
                 } catch (Exception $e) {  echo 'Error:'.$e->getMessage();  }
        return $this->conn;
                }
        
}
