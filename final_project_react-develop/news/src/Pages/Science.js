import { useContext , useEffect} from "react";
import Loading from "../Components/Loading/Loading";
import {SectionContext} from '../context/SectionContext';
import api from "../api"
import Card from "../Components/Card/Card";


const Science = () => {

    const {section,setSection,key,loading,setLoading} = useContext(SectionContext);


    useEffect(() => {
        (async () => {
            const {data} = await api.get(`science.json?api-key=${key}`)
            let list = data.results;
            let allNews = list.filter(news => news.section !== 'admin')
            setSection(allNews)
            setLoading(false)
        })()
      }, []);

      return (
        <div>
            <h1>Science</h1>
            {
                loading ? <Loading/> :  section &&  section.map(news => {
                    return (
                            <div>
                                <Card news={news}/>
                            </div>
                    ) }) 
            }
        </div>
            )
}

export default Science;
