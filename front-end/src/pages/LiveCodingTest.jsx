import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import emp_data from '../data.json'

const LiveCodingTest = () => {
    const [data, setData]  = useState([])
    const [headers, setheaders] = useState([])
    const [search, setSearch] = useState('')
    const [allDesignations, setAllDesignations]  = useState([])
    const [toggle, setToggle]  = useState(false)
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(()=>{
        setData(emp_data.emp_data)
    },[])

    useEffect(()=>{
        setheaders(Object.keys(emp_data.emp_data[0]));
        const designation = []
         emp_data.emp_data.forEach((element)=>{
                if(!designation.includes(element.designation)){
                    designation.push(element.designation)            
                }
        })
        setAllDesignations([...designation])
    },[data])


    const handleOrder =(e)=>{
        function compare( a, b ) {
            if ( a.name < b.name ){
              return e.target.value==='asce' ? -1 : 1;
            }
            if ( a.name > b.name ){
              return e.target.value==='desc' ? -1 : 1;
            }
            return 0;
          } 
        data.length>0 && setData([...data.sort(compare)])
    }


    const handledesignation = (e)=>{
        if(e.target.value){
            setData([...emp_data.emp_data.filter((item)=> item.designation===e.target.value)])
        }else{
            setData([...emp_data.emp_data])            
        }
    }

    const handleSearch = ()=>{
        if(search.length>0){
            const filterdData = data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) && item)
            const teamMembers = filterdData.length>0 ? emp_data.emp_data.filter((item)=>item.repoting_head===filterdData[0].name) : null
            console.log(teamMembers);
            if(filterdData.length>0)
            {
                setData([...data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) && item)])
            }
        }else{
            setData(emp_data.emp_data)
        }
    }

    const handleDetails = (name)=>{
        const user  = data.find(item=>item.name===name)
        const teamMembers = emp_data.emp_data.filter(item=>{
            if(item.repoting_head===name){
                return item.name
            }
        })
        setSelectedUser({...user,teamMembers})  
        setToggle(toggle?false:true)
    }


    return (
            <div className="bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png')] h-screen bg-cover bg-center ">
                <div className='flex gap-y-3 flex-col justify-center items-center h-full '>
                    {toggle && 
                    <div className='fixed z-50 bg-white rounded-md p-4'>
                        <div className='w-full flex justify-end'>
                            <button onClick={()=>setToggle(toggle?false:true)}>
                                <i className="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>   
                                                 
                        <div className='flex flex-col gap-y-3 p-3'>
                            <p className='text-3xl underline'>User Details</p>
                            <p className='italic'> Name:<span className='text-sm px-2'>{selectedUser.name}</span></p>
                            <hr/>
                            <p className='italic'> Designation:<span className='text-sm px-2'>{selectedUser.designation}</span></p>
                            <hr/>
                            <div>
                                 <p className='italic'>Team Members:</p>
                                    {selectedUser?.teamMembers?.map((item,index)=>{
                                        return (<p key={index} className='text-sm pl-10'>-{item.name}</p>)
                                    })}
                             </div>   
                        </div>    
                    </div>}
                    <div className='flex w-full justify-around'>
                        <select className='bg-white p-2 rounded-md' defaultValue={''} onChange={handleOrder}>
                            <option value={''} disabled>Ordering</option>
                            <option value={'asce'} >Ascending</option>
                            <option value={'desc'} >Descending</option>
                        </select>
                        <select className='bg-white p-2 rounded-md' defaultValue={null} onChange={handledesignation}>
                            <option value={''} >Designation</option>
                            {allDesignations.map((item,index)=>{
                            return (<option key={index} value={item}>{item}</option>)
                            })}
                        </select>
                        <div className='flex gap-x-3'>
                            <input type={'text'} className={'bg-white p-2 rounded-md'} placeholder='Search emaployee' onChange={e=>setSearch(e.target.value)}/>
                            <button className='bg-indigo-500 shadow-md rounded-md p-2 text-white font-bold' onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                    <div className='flex flex-col py-10 gap-y-9 bg-slate-600 shadow-lg bg-clip-padding bg-opacity-30 backdrop-blur-lg border border-gray-100 rounded-3xl w-3/4 p-3'> 
                        <div>   
                            <div className="relative overflow-x-auto  sm:rounded-md">
                                <table className="w-full text-sm text-left text-white">
                                    <thead className="text-xs text-white uppercase bg-white bg-opacity-40">
                                        <tr className='drop-shadow-md'>

                                            {headers.map((item,index)=>{
                                               return(
                                                <th key={index} scope="col" className="px-6 py-3" >
                                                    {item}
                                                </th>         
                                               ) 
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((item,index)=>{
                                        return (
                                        <tr key={index} className={`bg-white border-b ${index%2===0?'bg-opacity-20':'bg-opacity-40'} drop-shadow-md`}>
                                            <th scope="row" className="px-3 py-4 font-medium italic underline whitespace-nowrap cursor-pointer" onClick={()=>handleDetails(item.name)}>
                                                {item.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item.designation}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.repoting_head}
                                            </td>
                                        </tr>)
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default LiveCodingTest