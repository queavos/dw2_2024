class Facultades {
    datos=[];
    constructor()
    {
        let data=localStorage.getItem("facultades");
        if (!data)
            {
                this.predata();
            } else {
               this.getdata();
            }
            this.persistir();

    }
    getMaxId()
    {
        var idmax=-1;
         this.datos.forEach((d) => {
							//console.log("id=" + id);
							if (d.facu_id > idmax) {							
								idmax = d.facu_id;
							}
						});
						return idmax;
    }
    predata()
        {
            this.datos.push({
							facu_id: 1,
							facu_nombre: "facultad de salud",
							facu_sigla: "FACSA",
						});
            this.datos.push({
							facu_id: 2,
							facu_nombre: "Facultad de C A T",
							facu_sigla: "FACAT",
						});
        }
    getdata(){

        this.datos=JSON.parse(localStorage.getItem("facultades"));
    }
    persistir()
    {
        localStorage.setItem("facultades", JSON.stringify(this.datos));
    }   
    getIndexById(id)
        {
         let idx = "-1";
         this.datos.forEach((d, i)=>{
            console.log("id="+id);
            
            if (d.facu_id==id)
            { 
                console.log(d);
                 idx = i;
            } 
            
         });   
         return idx;
        } 
        agregar(f){
            f.facu_id=this.getMaxId()+1;
            this.datos.push(f);  
            this.persistir();  
        }
        actualizar(f){
            let idx=this.getIndexById(f.facu_id);
            this.datos[idx].facu_nombre=f.facu_nombre;
            this.datos[idx].facu_sigla = f.facu_sigla;
             this.persistir();  
        }
        borrar(idx){
            this.datos.splice(idx,1);
             this.persistir();  
        }
        getNameById(id)
        {
         let idx=this.getIndexById(id);
         return this.datos[idx].facu_nombre;    
        };
}