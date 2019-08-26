<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <h2>Formulario</h2>
        <FormNote/>

        <br>

        <h2>Listado</h2>

        <div class="col-md-12">
          <b-table stacked :items="notes" :fields="fields">
            <!-- <template>
              <b-button slot="delete" class="btn btn-danger btn-block col-5 right" type="submit" @click.prevent='eliminateNote(notes.id)'>Eliminar Datos</b-button>
            </template> -->
          </b-table>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FormNote from './FormNote'

const path = 'http://localhost:8000/api/v1.0/notes/'

export default {
  components:{
    FormNote
  },
  data(){
    return{
      fields: [
        {key: 'id', label: 'ID'},
        {key: 'date', label: 'Date'},
        {key: 'end_date', label: 'End Date'},
        {key: 'note', label:'Note'},
        {key: 'adjunto', label: 'Adjunto'},
        {key: 'user', label: 'USER'},
        {key: 'task', label: 'Task'},
        {key: 'tag', label: 'Tag'},
        {key: 'type', label: 'Type'}
       // {key: 'delete', label:''}
      ],
      notes:[]
    }
  },
  methods: {
    getNotes(){
      axios.get(path).then((response) => {
        console.log(response)
        this.notes = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    // eliminateNote(id){
    //   axios.get(`${path}${id}/`)
    //     .then((response) => {
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
  },
  created(){
    this.getNotes()
  }
}
</script>

<style>

</style>