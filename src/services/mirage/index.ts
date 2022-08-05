import { createServer, Factory, Model } from 'miragejs'
// import faker from 'faker'
import { faker } from '@faker-js/faker';

type User = {
  name: string,
  email: string,
  created_at: string,
}

export function makeServer() {
  const server = createServer({
    models: {
      // generic -> formato do Model.extend
      // Partial -> para momentos em que não passamos todos os campos
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        // name(i: number){
        //   return `User ${i + 1}`
        // },
        name(){
          const name = faker.name.firstName()
          const lastName = faker.name.lastName()
          return `${name} ${lastName}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt(){
          return faker.date.recent(10)
        },
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      // Setar o caminho da aplicacao para chamar as rotas do mirage
      // ex: api/users
      this.namespace = 'api'

      // faz que todas as chamadas do mirage demore 750 milissegundos
      // importante para testar os 'loadings' -> experiencia do usuario
      this.timing = 750

      // miragejs shorthand 
      // this.get("/users", function (schema, request) {

      // })
      this.get("/users")
      this.post("/users")

      this.namespace = ""
      this.passthrough()
    }
  })

  return server;
}