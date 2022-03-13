import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext } from '@material-ui/lab';
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
            <Tab label="Fonte" href="#fonte" />
            <Tab label="O projeto" href="#projeto" />
            <Tab label="Sobre nós" href="#sobre" />
          </Tabs>

        </AppBar>
        <Box display="flex" flexDirection="row">
        <Box className='img1'></Box>

          <Box display="flex" alignItems="base-line">
            <Box display="flex" flexDirection='column' justifyContent="center" alignItems="flex-end" className='mRight' id="fonte">
              
              <Box display="flex" justifyContent="flex-end" alignItems='center'>
                <Typography variant="h4" gutterBottom className='font bold subtitle'>Bem-vinde a Fonte!</Typography>
              </Box> 

              <Box display="block" alignItems="flex-end" >
              <Typography paragraph variant="subtitle1" color="textPrimary" className="font breakLines">
               Somos uma plataforma informativa que gera visibilidade e engajamento social para a <a href="https://brasil.un.org/pt-br/sdgs/6" target="_blank" rel="noreferrer" color="textPrimary" className='texto1 titulo text-decorator-none'>ODS 6</a> da  ONU.
               Somos a fonte de incentivo para que corporações se comprometam com a construção de um mundo melhor para todes!
              </Typography>
              </Box>

              <Box display="block" alignItems="flex-end" className='font textFonte'>
                <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='textMini textWeight'> 
                  A água é nossa fonte.
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
          </Box>
        </Box>

        <Box id="projeto" className='bgTexto padding'>

          <Box display="flex" justifyContent="center" alignItems="center" className="padding">
            <Box display="flex" flexDirection='column' justifyContent="center" className='img2'>
              <Typography className='font bold' variant="h4" gutterBottom color="textPrimary" component="h4" align="center">
                FONTE
              </Typography>
              <Typography className='font bold subtitle' align="center" variant="h6">Cada gota conta</Typography>
              <Typography className="font textFonte textWeight textAlign" variant="body1" gutterBottom color="textPrimary" component="body" >
                Há uma crise hídrica hoje, fomentada pelo mau gerenciamento da água,
                pelo desmatamento da nossa vasta floresta amazônica e também pelo fator aquecimento global, o que ocasiona a defazagem na distribuição equitativa da água,
                e afeta a todos. Em poucos anos seremos cada vez mais atingidos com mudanças climáticas e sua consequências.
                <p>Visando os princípios universais do <a href="https://www.pactoglobal.org.br/" target="_blank" rel="noreferrer" color="textPrimary" className='texto1 titulo text-decorator-none'>Pacto Global</a>, nosso objetivo é captar organizações interessadas em impactar gerações futuras e fazer
                  a diferença, criando alertas para aumentar a visibilidade para essa questão.
                  A água é nossa fonte e ela não pode cessar.</p>
              </Typography>
            </Box>
          </Box>

        </Box>
        
        <Box display="flex" justifyContent="space-around" id="sobre">
          <About />
        </Box>
        
      </TabContext>
    </>
  );
}

export default PostTab;