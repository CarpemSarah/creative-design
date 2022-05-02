import axios from "axios";

// //longitude, latitude 좌표
// let options = {
// 	url: 'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords='+`${longitude},${latitude}`+'&orders=addr&output=json',
// 	method: 'GET',
// 	headers: {
// 		'X-NCP-APIGW-API-KEY-ID':'znqmhdeniu', //앱 등록 시 발급받은 Client ID
// 		'X-NCP-APIGW-API-KEY':'NoZBFYEsiGchLwmvMqyIulR3pmIsM1dLuy2u9Vwo', //앱 등록 시 발급받은 Client Secret
// 	},
// };

// await request(options, async (err, res, body) => {
// 	const data = JSON.parse(body);
// },

export default function Nav() {

// 통신 받아 올 nav data
const [nav, setNav] = useState();


useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`public/Data/NavData.json`);
        setNavli(result.data.data.nav_data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
}