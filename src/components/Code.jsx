import React,{useContext} from 'react'
import Editor from './Editor';
import {Box, styled} from '@mui/material';
import { DataContext } from '../context/DataProvider';
const Container = styled(Box)({
    display: "flex",
    backgroundColor: "#060606",
    height: "52vh"
})
export default function Code() {
    const {html,css,js, setHtml, setCss, setJs} = useContext(DataContext);
  return (
    <Container>
        <Editor 
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}/>
        <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}/>
        <Editor
        heading="Javascript"
        icon="( )"
        color="#FCD000"
        value={js}
        onChange={setJs}/>
    </Container>
  )
}
