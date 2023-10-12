import React  from "react";
import { Text,View} from 'react-native';

const ApiCall =() =>{
    // const [data , setdata] = useState(undefined);

    // const getAPIData = async () =>{
    //     const url = "https://jsonplaceholder.typicode.com/posts/1";
    //     let result = await fetch(url);
    //     result = await result.json();
    //     setData(result)
    // }
    // useEffect(()=>{
    //     getAPIData();
    // },[])

    return (
      <View>
      <Text style={{fontSize: 30}}> API Call</Text>
      {/* {
        data ? <View>

            <Text>{data.id}</Text>
            <Text>{data.userid}</Text>
            <Text>{data.titlle}</Text>
            <Text>{data.body}</Text>
            
             </View> :null
      } */}
      </View>
    )
};
export default ApiCall;