class Carreras {
    datos=[];
    constructor()
    {
        let data=localStorage.getItem("carreras");
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
							if (d.carre_id > idmax) {							
								idmax = d.carre_id;
							}
						});
						return idmax;
    }
    predata()
        {
            this.datos.push({
							carre_id: 1,
                            facu_id:1,
							carre_nombre: "Farmacia",
							carre_sigla: "farma",
						});
            this.datos.push({
							carre_id: 2,
							facu_id: 1,
							carre_nombre: "Analisis",
							carre_sigla: "LASI",
						});
        }
    getdata(){

        this.datos=JSON.parse(localStorage.getItem("carreras"));
    }
    persistir()
    {
        localStorage.setItem("carreras", JSON.stringify(this.datos));
    }   
    getIndexById(id)
        {
         let idx = "-1";
         this.datos.forEach((d, i)=>{
            console.log("id="+id);
            
            if (d.carre_id==id)
            { 
                console.log(d);
                 idx = i;
            } 
            
         });   
         return idx;
        } 
        agregar(f){
            f.carre_id=this.getMaxId()+1;
            this.datos.push(f);  
            this.persistir();  
        }
        actualizar(f){
            let idx=this.getIndexById(f.carre_id);
            this.datos[idx].carre_nombre=f.carre_nombre;
            this.datos[idx].carre_sigla = f.carre_sigla;
             this.persistir();  
        }
        borrar(idx){
            this.datos.splice(idx,1);
             this.persistir();  
        }
}