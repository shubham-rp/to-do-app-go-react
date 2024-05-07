
import { Box } from '@mantine/core';
import useSWR from 'swr';
import './App.css'
import AddTodo from './components/AddTodo';

export const ENDPOINT = "http://localhost:4002";

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r)=>r.json());

function App() {
  
  const {data, mutate} = useSWR('api/todos', fetcher);

  return (
    <>
    <Box>
      <AddTodo/>
      Hi
      {JSON.stringify(data)}
      </Box>
    </> 
  )
}

export default App
