<template>
  <v-container>
    <v-card width="380">
      <v-list two-line class="altura">
        <v-list-item>
          <v-row>
            <v-col
              cols="12"
              sm="2"
              class="d-flex justify-center  justify-sm-start altura"
            >
              <v-slide-item v-slot="{ toggle }">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-icon
                    style="margin-left: 7px"
                      v-bind="attrs"
                      v-on="on"
                      @mouseover="
                        edad();
                        toggle()">
                      <v-icon color="color1">
                        mdi-calendar-month
                      </v-icon>
                    </v-list-item-icon>
                  </template>
                  <span>{{edadActual}} años</span>
                </v-tooltip>
              </v-slide-item>
            </v-col>
            <v-col cols="12" sm="10">
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex justify-center justify-sm-start"
                >
                  06/03/1988
                </v-list-item-title>
                <v-list-item-subtitle
                  class="d-flex justify-center justify-sm-start"
                >
                  Fecha de nacimiento
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-row>
            <v-col
              cols="12"
              sm="2"
              class="d-flex justify-center justify-sm-start altura"
            >
              <v-list-item-icon>
                <v-slide-item v-slot="{ toggle }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        aria-label="icono correo"
                        icon
                        elevation="4"
                        v-bind="attrs"
                        v-on="on"
                        href="mailto: alcafefront@gmail.com"
                        target="_blank"
                        @click="toggle"
                      >
                        <v-icon color="color1">
                          mdi-at
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Escribir correo</span>
                  </v-tooltip>
                </v-slide-item>
              </v-list-item-icon>
            </v-col>
            <v-col cols="12" sm="10">
              <v-list-item-content class="mb-2">
                <v-list-item-title
                  class="d-flex justify-center justify-sm-start"
                >
                  alcafefront@gmail.com
                </v-list-item-title>
                <v-list-item-subtitle
                  class="d-flex justify-center justify-sm-start"
                >
                  Correo electrónico
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-row>
            <v-col
              cols="12"
              sm="2"
              class="d-flex justify-center  justify-sm-start altura"
            >
              <v-list-item-icon>
                <v-slide-item v-slot="{ toggle }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        aria-label="icono teléfono"
                        icon
                        elevation="4"
                        href="tel:635507429"
                        target="_blank"
                        v-bind="attrs"
                        v-on="on"
                        @click="toggle"
                      >
                        <v-icon color="color1">
                          mdi-phone
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Llamar por teléfono</span>
                  </v-tooltip>
                </v-slide-item>
              </v-list-item-icon>
            </v-col>
            <v-col cols="12" sm="10">
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex justify-center justify-sm-start"
                >
                  635507429
                </v-list-item-title>
                <v-list-item-subtitle
                  class="d-flex justify-center justify-sm-start"
                >
                  Móvil
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-row>
            <v-col
              cols="12"
              sm="2"
              class="d-flex justify-center  justify-sm-start altura"
            >
              <v-list-item-icon>
                <v-slide-item v-slot="{ toggle }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        aria-label="icono Github"
                        icon
                        elevation="4"
                        href="https://github.com/AlbertoCF88"
                        target="_blank"
                        rel="noreferrer"
                        v-bind="attrs"
                        v-on="on"
                        @click="toggle"
                      >
                        <v-icon color="color1">
                          mdi-github
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Ir a Github</span>
                  </v-tooltip>
                </v-slide-item>
              </v-list-item-icon>
            </v-col>
            <v-col cols="12" sm="10">
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex justify-center justify-sm-start"
                >
                  AlbertoCF88
                </v-list-item-title>
                <v-list-item-subtitle
                  class="d-flex justify-center justify-sm-start"
                >
                  Cuenta en github.com
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-row>
            <v-col
              cols="12"
              sm="2"
              class="d-flex justify-center  justify-sm-start altura"
            >
              <v-list-item-icon>
                <v-slide-item v-slot="{ toggle }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        aria-label="icono google maps"
                        icon
                        elevation="4"
                        href="https://www.google.es/maps/place/Paterna,+Valencia/@39.5029344,-0.451063,15z/data=!3m1!4b1!4m5!3m4!1s0xd60454892e32d6d:0xb45b9f3dbffa9227!8m2!3d39.5037093!4d-0.4431618?hl=es"
                        target="_blank"
                        rel="noreferrer"
                        v-bind="attrs"
                        v-on="on"
                        @click="toggle"
                      >
                        <v-icon color="color1">
                          mdi-map-marker
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Ir a Google Maps</span>
                  </v-tooltip>
                </v-slide-item>
              </v-list-item-icon>
            </v-col>
            <v-col cols="12" sm="10">
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex justify-center justify-sm-start"
                >
                  Paterna, Valencia, España
                </v-list-item-title>
                <v-list-item-subtitle
                  class="d-flex justify-center justify-sm-start"
                >
                  Dirección
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>

      <v-slide-item v-slot="{ toggle }">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              aria-label="icono descargar CV"
              class="cv marginTop"
              text
              block
              color="color4"
              href="/files/cv.pdf"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              @click="toggle"
            >
              <v-icon left>
                mdi-download
              </v-icon>
              Curriculum pdf
            </v-btn>
          </template>
          <span>Descargar Cv.pdf</span>
        </v-tooltip>
      </v-slide-item>

      <div class="pie"></div>
    </v-card>
  </v-container>
</template>

<style scoped>
.cv {
  position: relative;
  bottom: 8px;
}
.mdi-calendar-month::before {
  padding-top: 9px;
  padding-left: 8px;
}
.v-list-item__content {
  padding: 18px 0;
}
.altura {
  margin-bottom: 0.5px;
}
.pie {
  width: 100%;
  height: 5px;
  background: #43b883;
}
/*------------------------------@media ---290--------------------------------------------------- */
@media (max-width: 294px) {
  .v-list-item__title {
    font-size: 5vw;
  }
}
/*----------FIn---@media (max-width:290px)------------------------*/
/*-------------@media (max-width:812px)------------------------*/
@media (max-width: 815px) {
  .v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
    margin-left: 0px;
  }
  .v-divider--inset:not(.v-divider--vertical) {
    max-width: 100%;
  }
  .altura {
    margin-bottom: -53.5px;
  }
  .marginTop {
    margin-top: 70px;
  }
  .v-application--is-ltr .v-list-item__action:first-child,
  .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 0px;
  }
}
/*----------FIn---@media (max-width:812px)------------------------*/
</style>

<script>
export default {
  name: "comBarraV",

  data: () => ({
    edadActual: "",
  }),
  methods: {
    edad() {
      let fechanacimiento = new Date("03/06/1988");
      let hoy = new Date();
      this.edadActual = hoy.getFullYear() - fechanacimiento.getFullYear();

      return this.edadActual;
    },
  }, //methods
}; //export default
</script>
