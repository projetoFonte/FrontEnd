import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import About from '../../../pages/about/About';
import './PostTab.css';

function PostTab() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className='bgtab' centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="A fonte" value="1" href="#fonte" />
            <Tab label="O projeto" value="1" href="#projeto" />
            <Tab label="Sobre nós" value="1" href="#sobre" />
          </Tabs>

        </AppBar>
        <TabPanel value="1" className='bgTexto'>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="base-line">
          <Box className='img1'></Box>

            <Box display="flex" flexDirection='column' justifyContent="center">
              <Typography id="fonte" variant="body1" gutterBottom color="textPrimary" align="justify" className='textMini textWeight'> 
                A água é nossa <b>fonte</b>.
              </Typography>
              <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='textMini textWeight'>
                A água revigora.
              </Typography>
              <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='textMini textWeight'>
                A água alimenta vidas.
              </Typography>
              <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='textMini textWeight'>
                A água é um recurso finito.
              </Typography>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value="1" id="projeto">

          <Box display="flex" justifyContent="center" alignItems="center" >
            <Box display="flex" flexDirection='column' justifyContent="center" className='img2'>
              <Typography className='about bold titleColor' variant="h4" gutterBottom color="textPrimary" component="h4" align="center">
                FONTE
              </Typography>
              <Typography className="texto1 textSize textWeight textAlign" variant="body1" gutterBottom color="textPrimary" component="body" >
                Há uma crise hídrica hoje, fomentada pelo mau gerenciamento da água,
                pelo desmatamento da nossa vasta floresta amazônica e também pelo fator aquecimento global, o que ocasiona a defazagem na distribuição equitativa da água,
                e afeta a todos.
                Em poucos anos seremos cada vez mais atingidos com mudanças climáticas e sua consequências.
                Visando os princípios universais do <a href="https://www.pactoglobal.org.br/" target="_blank"  rel="noreferrer" color="textPrimary" className='texto1 titulo text-decorator-none'>Pacto Global</a>, nosso objetivo é captar organizações interessadas em impactar gerações futuras e fazer
                a diferença, criando alertas para aumentar a visibilidade para essa questão.
                A água é nossa <b>fonte</b> e ela não pode cessar.
              </Typography>
            </Box>
          </Box>

        </TabPanel>
        
        <TabPanel value="1" id="sobre">
          <About />
        </TabPanel>
        
      </TabContext>
    </>
  );
}

export default PostTab;