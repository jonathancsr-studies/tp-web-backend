#Server RESTFull para a aplicação web do tp2


Server construido com as seguintes bibliotecas 
    - Express
    - Cors
    - JWT
    - Bcrypt
    - Sequelize

Para startar use o comando
    -npm run dev

Os caminhos disponiveis são os seguintes

    - '/users'
      - '/register' 
        - {
          - username
          - email
          - password
          - create_time 
        - }
      - '/login'
        - {
          - email
          - password
        - }
    - '/atributes'
      - '/findById'
    - '/widgets'
      - '/findById'
      - '/findAll'
    - '/widgetsHasAtts'
      - '/findById'
      - '/findAll'
    - '/world'
      - '/findById'
      - '/findAll'
    - '/worldHasWidgets'
      - '/findById'
      - '/findAll'
      - '/registerWidgets'