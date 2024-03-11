import ReportsScreen from "../../../../components/reports"

const ExitReportsScreen = () => {

  const data = [
    {color:'#ff0000', title:'123.123.123-12', text:'Guto Alves', date: '22/02/2024', hour:'11:00'},
    {color:'#ff0000', title:'123.123.123-12', text:'Guto Alves', date: '22/02/2024', hour:'11:00'},
    {color:'#ff0000', title:'123.123.123-12', text:'Guto Alves', date: '22/02/2024', hour:'11:00'},
    {color:'#ff0000', title:'123.123.123-12', text:'Guto Alves', date: '22/02/2024', hour:'11:00'},
  
  ]

  return(
    <ReportsScreen
      data={data}
    />
  )
}

export default ExitReportsScreen