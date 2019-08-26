<template>
  <div class="container">
    <div class="col">
      <div class="card">
        <div class="card-body">

          <form>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Note</label>
              <div class="col-sm-10">
                <textarea name="note" class="form-control" placeholder="Escribe aquí"  rows="3" v-model="form.note"></textarea>
              </div>
            </div>

             <div class="form-group row">
              <label class="col-sm-2 col-form-label">End Date</label>
              <div class="col-sm-10">
                <input name="end_date" class="form-control" type="datetime-local" v-model="form.end_date">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Adjunto</label>
              <div class="col-sm-10">
                <input name="adjunto" class="left" type="file">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">USER</label>
              <div class="col-sm-10">
                <select name="user" class="left custom-select col-6" v-model="form.user">
                  <option selected>--- Elige usuario ---</option>
                  <option value=1 >Usuario de prueba</option>
                </select>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-sm-2 col-form-label">USER</label>
              <div class="col-sm-10">
                <input name="user" class="left form-control" v-model="form.user">
              </div>
            </div> -->


            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Task</label>
              <div class="col-sm-10">
                <input name="task" class="left" type="checkbox" v-model="form.task">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Tag</label>
              <div class="col-sm-10">
                <input name="tag" class="form-control" placeholder="Escribe aquí la etiqueta" v-model="form.tag">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Type</label>
              <div class="col-sm-10">
                <select name="type" class="left custom-select col-4" v-model="form.type">
                  <option selected>--- Elige tipo ---</option>
                  <option value="Agua">Agua</option>
                  <option value="Fuego">Fuego</option>
                  <option value="Planta">Planta</option>
                </select>
              </div>
            </div>

            <div class="col-sm-3 form-group row right">
              <button class="btn btn-dark btn-block" type="submit" @click='createNote()'>Añadir</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      users:{},
      form:{
        note:"",
        end_date:"",
        adjunto:null,
        user:"",
        task: false,
        tag:"",
        type:""
      }
    }
  },
  methods:{
    createNote(){
      const path = 'http://localhost:8000/api/v1.0/notes/'
      axios.post(path, this.form)
        .then((response) => {
          alert('¡Bien hecho!')
      })
        .catch((error) => {
          alert('Algo salió mal')
      })
    }
  }
  // created(){
	// 		axios.get('http://localhost:8000/api/v1.0/notes/')
	// 			.then((response) => {
	// 				console.log(response)
	// 				this.users = response.data
	// 			})
	// 			.catch((error) => {
	// 				console.log(error.message)
  //       }),
  //     axios.get('http://localhost:8000/api/v1.0/users/')
  //       .then((response) => {
  //         console.log(response)
  //         // this.users = response.data
  //       })
  //       .catch((error) => {
  //         console.log(error.message)
  //       })
  //    
  // }
}
</script>

<style>

/* Helpers */
.left{
  float: left;
}
.right{
  float: right;
}

</style>