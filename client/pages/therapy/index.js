import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import ChartLine from "../../components/therapy/chart";
import {  Avatar, Button } from "antd";

const TherapyIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [ok, setOk] = useState(false);
  const [isGraph, setIsGraph] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isDanger, setIsDanger] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [isModerate, setIsModerate] = useState(false);
  const [counter, setCounter] = useState(60);
  const [data, setData] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    if(isNext){
      setData(data2)
    }else{
      setData(data1)
    }
  }
   
    
  

  const data1 = [
    {
      "name": "Anxietate",
      "year": "5",
      "gdp": 1211346869605.24
    },
    {
      "name": "Anxietate",
      "year": "10",
      "gdp": 1339395718865.3
    },
    {
      "name": "Anxietate",
      "year": "15",
      "gdp": 1470550015081.55
    },
    {
      "name": "Anxietate",
      "year": "20",
      "gdp": 1660287965662.68
    },
    {
      "name": "Anxietate",
      "year": "25",
      "gdp": 1955347004963.27
    },
    {
      "name": "Anxietate",
      "year": "30",
      "gdp": 2285965892360.54
    },
    {
      "name": "Anxietate",
      "year": "35",
      "gdp": 2752131773355.16
    },
    {
      "name": "Anxietate",
      "year": "40",
      "gdp": 3550342425238.25
    },
    {
      "name": "Anxietate",
      "year": "45",
      "gdp": 8594306848763.08
    },
    {
      "name": "Anxietate",
      "year": "50",
      "gdp": 8101702432883.45
    },
    {
      "name": "Anxietate",
      "year": "55",
      "gdp": 4087164527421.24
    },
    {
      "name": "Anxietate",
      "year": "60",
      "gdp": 3551500425597.77
    },
    {
      "name": "Anxietate",
      "year": "65",
      "gdp": 3532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "70",
      "gdp": 3132230724141.76
    },
    {
      "name": "Anxietate",
      "year": "75",
      "gdp": 2832230724141.76
    },
    {
      "name": "Anxietate",
      "year": "80",
      "gdp": 2532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "85",
      "gdp": 2332230724141.76
    },
    {
      "name": "Anxietate",
      "year": "90",
      "gdp": 2232230724141.76
    },
    {
      "name": "Anxietate",
      "year": "95",
      "gdp": 2132230724141.76
    },
    {
      "name": "Inima",
      "year": "5",
      "gdp": 10252345464000
    },
    {
      "name": "Inima",
      "year": "10",
      "gdp": 10581821399000
    },
    {
      "name": "Inima",
      "year": "15",
      "gdp": 10936419054000
    },
    {
      "name": "Inima",
      "year": "20",
      "gdp": 11458243878000
    },
    {
      "name": "Inima",
      "year": "25",
      "gdp": 12213729147000
    },
    {
      "name": "Inima",
      "year": "30",
      "gdp": 13036640229000
    },
    {
      "name": "Inima",
      "year": "35",
      "gdp": 13814611414000
    },
    {
      "name": "Inima",
      "year": "40",
      "gdp": 14451858650000
    },
    {
      "name": "Inima",
      "year": "45",
      "gdp": 14712844084000
    },
    {
      "name": "Inima",
      "year": "50",
      "gdp": 14448933025000
    },
    {
      "name": "Inima",
      "year": "55",
      "gdp": 14992052727000
    },
    {
      "name": "Inima",
      "year": "60",
      "gdp": 15542581104000
    },
    {
      "name": "Inima",
      "year": "65",
      "gdp": 16197007349000
    },
    {
      "name": "Inima",
      "year": "70",
      "gdp": 16784849190000
    },
    {
      "name": "Inima",
      "year": "75",
      "gdp": 17521746534000
    },
    {
      "name": "Inima",
      "year": "80",
      "gdp": 18219297584000
    },
    {
      "name": "Inima",
      "year": "85",
      "gdp": 18707188235000
    },
    {
      "name": "Inima",
      "year": "90",
      "gdp": 19485393853000
    },
    {
      "name": "Inima",
      "year": "95",
      "gdp": 20544343456936.5
    },
    {
      "name": "Nivel Adrenalina",
      "year": "5",
      "gdp": 1657816613708.58
    },
    {
      "name": "Nivel Adrenalina",
      "year": "10",
      "gdp": 1640246149417.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "15",
      "gdp": 1784473920863.31
    },
    {
      "name": "Nivel Adrenalina",
      "year": "20",
      "gdp": 2053018775510.2
    },
    {
      "name": "Nivel Adrenalina",
      "year": "25",
      "gdp": 2416931526913.22
    },
    {
      "name": "Nivel Adrenalina",
      "year": "30",
      "gdp": 2538680000000
    },
    {
      "name": "Nivel Adrenalina",
      "year": "35",
      "gdp": 2713749770009.2
    },
    {
      "name": "Nivel Adrenalina",
      "year": "40",
      "gdp": 8100882352941.18
    },
    {
      "name": "Nivel Adrenalina",
      "year": "45",
      "gdp": 8922667279411.76
    },
    {
      "name": "Nivel Adrenalina",
      "year": "50",
      "gdp": 8410909799034.12
    },
    {
      "name": "Nivel Adrenalina",
      "year": "55",
      "gdp": 2475244321361.11
    },
    {
      "name": "Nivel Adrenalina",
      "year": "60",
      "gdp": 2659310054646.23
    },
    {
      "name": "Nivel Adrenalina",
      "year": "65",
      "gdp": 2704887678386.72
    },
    {
      "name": "Nivel Adrenalina",
      "year": "70",
      "gdp": 2786022872706.81
    },
    {
      "name": "Nivel Adrenalina",
      "year": "75",
      "gdp": 3063803240208.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "80",
      "gdp": 2928591002002.51
    },
    {
      "name": "Nivel Adrenalina",
      "year": "85",
      "gdp": 2694283209613.29
    },
    {
      "name": "Nivel Adrenalina",
      "year": "90",
      "gdp": 2666229179958.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "95",
      "gdp": 2855296731521.96
    }
  ]

  const data2 = [
    {
      "name": "Anxietate",
      "year": "5",
      "gdp": 1211346869605.24
    },
    {
      "name": "Anxietate",
      "year": "10",
      "gdp": 1339395718865.3
    },
    {
      "name": "Anxietate",
      "year": "15",
      "gdp": 1470550015081.55
    },
    {
      "name": "Anxietate",
      "year": "20",
      "gdp": 1660287965662.68
    },
    {
      "name": "Anxietate",
      "year": "25",
      "gdp": 1955347004963.27
    },
    {
      "name": "Anxietate",
      "year": "30",
      "gdp": 2285965892360.54
    },
    {
      "name": "Anxietate",
      "year": "35",
      "gdp": 2752131773355.16
    },
    {
      "name": "Anxietate",
      "year": "40",
      "gdp": 3550342425238.25
    },
    {
      "name": "Anxietate",
      "year": "45",
      "gdp": 9594306848763.08
    },
    {
      "name": "Anxietate",
      "year": "50",
      "gdp": 9101702432883.45
    },
    {
      "name": "Anxietate",
      "year": "55",
      "gdp": 9087164527421.24
    },
    {
      "name": "Anxietate",
      "year": "60",
      "gdp": 8551500425597.77
    },
    {
      "name": "Anxietate",
      "year": "65",
      "gdp": 8132230724141.76
    },
    {
      "name": "Anxietate",
      "year": "70",
      "gdp": 7532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "75",
      "gdp": 6532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "80",
      "gdp": 4532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "85",
      "gdp": 3532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "90",
      "gdp": 2532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "95",
      "gdp": 1532230724141.76
    },
    {
      "name": "Inima",
      "year": "5",
      "gdp": 10252345464000
    },
    {
      "name": "Inima",
      "year": "10",
      "gdp": 10581821399000
    },
    {
      "name": "Inima",
      "year": "15",
      "gdp": 10936419054000
    },
    {
      "name": "Inima",
      "year": "20",
      "gdp": 11458243878000
    },
    {
      "name": "Inima",
      "year": "25",
      "gdp": 12213729147000
    },
    {
      "name": "Inima",
      "year": "30",
      "gdp": 13036640229000
    },
    {
      "name": "Inima",
      "year": "35",
      "gdp": 13814611414000
    },
    {
      "name": "Inima",
      "year": "40",
      "gdp": 14451858650000
    },
    {
      "name": "Inima",
      "year": "45",
      "gdp": 14712844084000
    },
    {
      "name": "Inima",
      "year": "50",
      "gdp": 14448933025000
    },
    {
      "name": "Inima",
      "year": "55",
      "gdp": 14992052727000
    },
    {
      "name": "Inima",
      "year": "60",
      "gdp": 15542581104000
    },
    {
      "name": "Inima",
      "year": "65",
      "gdp": 16197007349000
    },
    {
      "name": "Inima",
      "year": "70",
      "gdp": 16784849190000
    },
    {
      "name": "Inima",
      "year": "75",
      "gdp": 17521746534000
    },
    {
      "name": "Inima",
      "year": "80",
      "gdp": 18219297584000
    },
    {
      "name": "Inima",
      "year": "85",
      "gdp": 18707188235000
    },
    {
      "name": "Inima",
      "year": "90",
      "gdp": 19485393853000
    },
    {
      "name": "Inima",
      "year": "95",
      "gdp": 20544343456936.5
    },
    {
      "name": "Nivel Adrenalina",
      "year": "5",
      "gdp": 1657816613708.58
    },
    {
      "name": "Nivel Adrenalina",
      "year": "10",
      "gdp": 1640246149417.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "15",
      "gdp": 1784473920863.31
    },
    {
      "name": "Nivel Adrenalina",
      "year": "20",
      "gdp": 2053018775510.2
    },
    {
      "name": "Nivel Adrenalina",
      "year": "25",
      "gdp": 2416931526913.22
    },
    {
      "name": "Nivel Adrenalina",
      "year": "30",
      "gdp": 2538680000000
    },
    {
      "name": "Nivel Adrenalina",
      "year": "35",
      "gdp": 2713749770009.2
    },
    {
      "name": "Nivel Adrenalina",
      "year": "40",
      "gdp": 9100882352941.18
    },
    {
      "name": "Nivel Adrenalina",
      "year": "45",
      "gdp": 9922667279411.76
    },
    {
      "name": "Nivel Adrenalina",
      "year": "50",
      "gdp": 9410909799034.12
    },
    {
      "name": "Nivel Adrenalina",
      "year": "55",
      "gdp": 9475244321361.11
    },
    {
      "name": "Nivel Adrenalina",
      "year": "60",
      "gdp": 9659310054646.23
    },
    {
      "name": "Nivel Adrenalina",
      "year": "65",
      "gdp": 8704887678386.72
    },
    {
      "name": "Nivel Adrenalina",
      "year": "70",
      "gdp": 7786022872706.81
    },
    {
      "name": "Nivel Adrenalina",
      "year": "75",
      "gdp": 4063803240208.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "80",
      "gdp": 2928591002002.51
    },
    {
      "name": "Nivel Adrenalina",
      "year": "85",
      "gdp": 2694283209613.29
    },
    {
      "name": "Nivel Adrenalina",
      "year": "90",
      "gdp": 2666229179958.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "95",
      "gdp": 2855296731521.96
    }
  ]

 
   
    
   const handleNext = () => {
     loadData(data2);
     setIsFinal(true);
    }
  
  

  return (
    <UserRoute>
      <h1 className="text-center ">Dasboard Terapeut</h1>
      <hr className="text-danger" />
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{maxHeight: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Avatar className="avatar-card" style={{ height: "200px", width: "200px", objectFit: "cover", background: '#6c757d', marginRight: '100px' }}>Live VR</Avatar>
          </div>
          <div className="col-md-6" style={{maxHeight: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {isGraph ? <ChartLine data={data} />: <Avatar className="avatar-card" style={{ height: "200px", width: "200px", objectFit: "cover", background: '#6c757d' }}>Live Graph</Avatar>}
          </div>
          <hr className="text-danger" />
          <div className="col-md-6 mt-4" >
            <h5 className="text-primary mt-4">Recomandari in timp real</h5>
            <hr/>
            <h6>Anxietate:{isNext && <span className="result-avatar text-primary">ok</span>}</h6>
            <h6>Adrenalina: {isGraph && <span className="result-avatar text-primary">ok</span>}</h6>
            <h6>Inima: {isGraph && <span className="result-avatar text-primary">ok</span>}</h6>            
            <div className="col-md-6 mt-4" >
            <Button  
              onClick={isNext ? handleNext : () => {setIsGraph(true), setIsNext(true)}}        
              className="col mt-3"
              size="small"
              type="primary"          
              shape="round"
            >
              {isNext ? 'Continua Simulare' : 'Start Simulare'}
            </Button>
        <Button   
          onClick={() => {setIsGraph(false), setIsNext(false)}}       
          className="col mt-3"
          size="small"
          type="danger"          
          shape="round"
        >
          Stop Simulare
        </Button></div>
            
          </div>
          <div className="col-md-6 mt-4"  >
          <h5 className="text-primary mt-4">Rezultate</h5>
            <hr/>
            <h6>Anxietate: {isFinal && <span className="result-avatar text-success">ok</span>} </h6>
            <h6>Adrenalina: {isFinal && <span className="result-avatar text-success">ok</span>}</h6>
            <h6>Inima: {isFinal && <span className="result-avatar text-success">Ok</span>}</h6>
            <h6>Recomandam sa: {isFinal && <span className=" text-primary">continuam cu urmatoarea simulare</span>}</h6>
          <Button          
          className="col mt-4"
          size="large"
          type="primary"          
          shape="round"
        >
          Salveaza date
        </Button>
          </div>
        </div>
        
      </div>
    </UserRoute>
  );
};

export default TherapyIndex;