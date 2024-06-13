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
    public function getById($id)
    {
        $sql = "select * from usuarios where id=".$id;
        $result = $this->conn->query($sql);
        return $result;
    }
    public function deleteById($id)
    {
        $sql = "delete  from usuarios where id=" . $id;
        $result = $this->conn->query($sql);
        return true;
    }
    public function insert($user_nombre,$user_mail,$username)
    {
        $sql = "INSERT INTO `usuarios` ( 
        `user_mail`, `user_nombre`, `password`, 
        `username`,created_date_time) 
        VALUES ('" . $user_mail . "','" . $user_nombre . "',SHA1('" . $username . "'),'" . $username . "', now() );";
        $result = $this->conn->query($sql);
        return true;
    }
    public function update($id, $user_nombre, $user_mail, $username)
    {
  $sql= "update usuarios  set user_nombre='". $user_nombre."', user_mail='". $user_mail . "', username='" . $username. "', updated_date_time=now() where id=".$id;
      $result = $this->conn->query($sql);
      return true;
    }
}

?>