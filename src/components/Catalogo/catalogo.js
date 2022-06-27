import React from 'react';
import '../Catalogo/catalogo.scss'
import ContactFondo from "../FondoContact";
import { CataProd } from './produc';




export const Catalogo = () => {

  return (
    <>
     
      <div className='menu-tempo'></div>
      
      <div className='container-products'>

        <div className='cabezera'>
         
          <h2>Catálogo de Productos</h2>


          <div className='filtros-cabeza'>

            <div className='filter1'>
            <select name="ordenar" id="" className='fil'>
              <option value="volvo">Nombre: Ordenar de A a Z</option>
              <option value="volvo">Nombre: Ordenar de Z a A</option>
            </select>
            </div>

            <div className='filter'>
            <input type="search" className='fil' placeholder='Buscar Producto'/>         
           </div>
         
         </div>

        </div>



        <div className='conteCata'>

          <div className='filtros'>
          <div className='cat-fil'>
              <h3>Categorias</h3>
              <select className='comboboxx' name="order" id="categoria">
                <option value="">Todas los Productos</option>
                <option value="marca1">marca1</option>
                <option value="marca2">marca2</option>
                <option value="marca3">marca3</option>
                <option value="marca4">marca4</option>
              </select>
            </div> 
                     
            <div className='cat-fil'>
              <h3>Marcas</h3>
              <select className='comboboxx' name="order" id="marcas">
                <option value="">Todas las Marcas</option>
                <option value="marca1">marca1</option>
                <option value="marca2">marca2</option>
                <option value="marca3">marca3</option>
                <option value="marca4">marca4</option>
              </select>
            </div>
          </div>
         

          <div className='catalogo'>  
          <div class="cont-cata">
  
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/> 
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/> 
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>

    
    
    
 



  
</div>
          

        </div>
        </div>
      </div>


      
    </>

    
  )
}