<?php
    
class Usuarios {
    private $conn;
    public function __construct($db)
    {
        $this->conn=$db;
    }
    public function getAll() {
        $sql="select * from usuarios";
        $result=$this->conn->query($sql);
        return $result;

    }
    public function getById()
    {
    }    


}


?>