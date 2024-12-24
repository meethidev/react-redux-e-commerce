import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const Register = () => {

    const { user, isSuccess, isLoading, isError, message } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
        password_2: ""
    });

    const {name, email, password, password_2} = formData;

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== password_2){
            toast.error("Both passwords should be same", { position: "top-center", theme: "dark"});
        } else{
            dispatch(registerUser(formData));
        }
    }

    useEffect(() => {
        if(user){
            navigate("/");
        }
         if(isError && message){
            toast.error(message, { position: "top-center", theme: "dark"});

         }
    }, [user, isError, message])

    if(isLoading){
        return(
            <Loading/>
        )
    }

  return (
    <>
    <div className='container p-10 py-36 flex items-center justify-center'>
      
      <div class="min-h-screen flex justify-center items-center">
      
          <div class=" flex flex-col md:flex-row space-y-10 md:space-y-0 bg-white p md:mx-52  shadow-blue-400/50">
            
              
             <div class="p-6 md:p-10">
               
                  <h2 class="font-mono text-5xl font-bold mb-5">Sign Up </h2>
                  <p class="font-sans mb-12 font-light text-gray-500 max-w-sm">Kindly give following detail :)</p>
          
            <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={handleChange} class="mb-2 border border-gray-300 w-full p-3 text-center rounded-md placeholder:font-mono font-light text-xl" type="text" placeholder="Enter your name"/>
                 <input name="email" value={email} onChange={handleChange} class="mb-2 border border-gray-300 w-full p-3 text-center rounded-md placeholder:font-mono font-light text-xl" type="email" placeholder="Enter your email address"/>
                 <input name="password" value={password} onChange={handleChange} class="mb-2 border border-gray-300 w-full p-3 text-center rounded-md placeholder:font-mono font-light text-xl" type="password" placeholder="Enter your password"/>
                 <input name="password_2" value={password_2} onChange={handleChange} class="mb-2 border border-gray-300 w-full p-3 text-center rounded-md placeholder:font-mono font-light text-xl" type="password" placeholder="Confirm your password"/>
 
                 <div class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                     <button class="flex justify-center items-center space-x-4 bg-[#0269C0] text-white w-full md:w-auto p-4 font-serif font-bold rounded-md shadow-sm px-9 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:translate-y-0.5 hover:translate duration-200">
                         <span>
                             Sign Up
                         </span>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                           </svg> 
                     </button>
 
                 </div>
            </form>
 
                 
 
                
                     <div class="mt-12 border-b border-gray-300"></div>
 
                 
                      <p class="py-6 text-sm text-gray-400 text-center font-thin">or log in with</p>
 
                    
 
                     <div class="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                         <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-md shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 duration-200 md:w-1/2">
                             <img class="w-11" src="data:image/png;base64,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" alt=""/>
                             <span class="font-thin">Facebook</span>
                         </button>
                         <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-md shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 duration-200 md:w-1/2">
                             <img class="w-11" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABL1BMVEX////lQzU0o1NCgO/2twQ+fu/T3vpMhu9aj/Hu8/02eu77/f+Dp/PlQTP2tADkOywln0n1sADj6/zl8egsoU7++fnkNiX63Nr3y8j+8toFmjv86+rkMR/jKRHoYlfmSTznVkosdu6n0rGez6r30tD1wLzyqaTjIwTth4HztLDukovqdW3968L4x2D//Pb50H351Iv84bH3vSX87cz5z2n73qb4x1P+9unE1Pmjvva6zPhHqmJds3TS59eJxpi73MNyu4TwnJfreTXjLjbvkDLlPkPzpSrpaz3nVDnzqyLxmSTthDLqcAD3wTmpsTmQr/SJsVlwq1HIukOxuE3gtyyPsU0LbO3OtDVhrl5qmPFLlcQ/evxMnahEoIY4oWdNj9ZGlbc6mJMznXNCh9yNt9bjx0FtAAAHiUlEQVR4nO2a+3fSSBSAIUBpaZNJmxBoCIHyLKCodW1tCS8fre5ut+tbu1VX3f//b9gJD8sjk0wewwTPfL94PKdw8nHn3jv3QiTCYDAYDAaDwWAwGAwGg8FgMBgMBoPB+NVIT6D9HP5I5zKZSrbaqNWGw2Gt1qhmK5lMbg2lcpVsY3ioF7R6Pp/XTPL5el0r6IfDRnadjNKZaq2l85qmAJ6PzsLzQNFMo1o1Q/spscjUYEAU6BFFAY2UQqvZyNF+VAfSjUOdXwqIhQ8UggHK0n5eG3JNvQBsQrIYIFBoNUKaPblDFyY/ffQw6uSamuLOZKKTL1RDppOrgbwHlRGgrldCpJPO6p5VTJR6MzSVLQNPmA8Vk7CctXS26CssY4AyDEFwckPeb1hG8EqLeteptBQQhItpU6Rcpau6y85iB4gOKdqkG4UAXaANOKRmk655aZN28PkWLZdmPWCXqBKlVNKgS8AqUUX/ZVx4Rac0saWHgbsAai41LejcB3qFjkukGg069+m5VIpu2j4/xvZvlCItl0wL1wUoWr4+2tKAfD2vIVssoOaSa+I1S/j8hdawWqlkTCqVRlPX6pa5BvLUNk9VnOSHJsVaZm4rC/+TqzRBfemjoOiSiToeMnOyr6EaYKWVn/80gELNJdfSHFWAbjub5JrRmewBBXrbzYZDt+QBr1ed3sRcS0106OU+fAyHSz9sfjWce3y2xQPaLpFD+0MG+EPMQ5MbFoDZKykOyxn7QwaKyLxfIp0tKqBIc/Bv2W4vFD3rZlSs6DxNl6ztIdPcziMZqguZ4ydP0fmvFUOw+sLnzpHw7DnKRiuGYimJzV0hHj8vWNsohbWKS+TOZRzy8sLqOg/WzCVyLz5i98myC887dv1wsX8sjG3iz14sugCsth8iHsV/cn4xPzcrrTU7ZO17wq3NyyezVY1uI/fC7SkzEZ7dVjUe0Nx4e+JBfJ7fXzydBobWxssz7fvCgs35xfg6wPM12g/nlv27izLx3T+ejjNmzbI/Enm4qDKq0WbigCbtZ3PNg10rm/MXPK+sW/ZbpMzkqF0otL4g8s7JcspM+HPdShnM/yOUTNz5xdt7G57ZIiBjmf8mwm8YMlexpEdiGwRkrPPfTJoHGDI7qYRHDgjItB8hZU6wZGIeOTgjIHMPlTJHbbIyp9uBy5wcI2SEY4xX+5G5WqHM7n2yMqmd4MvZySVKBiP//cgkNgnIHKHy/+EayiBc4rv7hGWSwcvsU5OJ7a1QBqPNMJmfrFJmDY8ZvQJAQoZaaSYhc4mSId00ScjQus6Q6DPULpokZKiNACSuM9SGMxK3Zt9js1eZAxIy/hYa4Zo00asmAWfVtHPgtLhAypwRkEEtAQXhr66zzFVy0wGUzcHj4F1Q61nh6G+x5/zqLSf2UOcwQWJvZl0BhLevZE4O4N03DhAuyeAvABHLCiAIrz9yHCeW/b/7FUIm9YmIzPKXTcLRG85E7ki+3z2JyBkixcwiaYS372RuTMnvm2+9RxazIJ59mfkvaAXhw6uJCicbfkODOmUxInvzyMJX50J8lC5TG59Zs4UqzIRSZv6uKVy+6XAzMh3nXmPHKaowk1jOjrn9uYnw4R03hzjwc9C2kC0zQShlbs8ZrMivuAVkPzXgFHWbSW0SSpnI9Cda04o8L8N5P2gbyMCkdkidMvNXjeMLzLKLn2azZXOlPg30+eeBfVN4+9HKBaaNVxtk9hM9ZTA0ceE1J1vLcKKBMUAvcxZDXv9TO0ELzHFskS7+bB7H0IcsSayWjeiLNjJeCvTjTbRL4hO59B9h2NsYLmvamU1cYgmS6W/SVe1kYBUouQjO1qmtC4El0wI9exuZ62Hb7O0gr5ej9CcdmEhEklHVbGpj4F0G2iXj+h9kITOXzIQzxqRkH5qRDkbm9A1O5G7QWxk4lpF3iUgD2xow0hEHDjr9gRlgWfycRJ20RHIFLrAGINvmjI5q9JFNRyp31MkHIn75irB5T7L5z2DfbCaIqjjoL9WC7bZU6qjq7achcv9a3gDIDTILtHs4NqaPavRK3a40ptvtlw151mR8JG9+LNukyJflKZJ965x7VBWeqA5k5CZavE5WP39NLegkEiSWsgi6Hee0mXncMegIfrleaJ6pq5UFBtLHKAL4iOJNbLYOEFtjICjhHjQsZPHbj1sbsmOMFQ7XGreI36+nNgnCN/9V2Hy5mSROgsxGdqU2svwtadockB0vV2TDqd9/pGi5mFUgyJoGj5p8TXjst7Vx1W8wbNT/qLmYF/kgSzScUym6wLvAwGFYc+Ni9Km6mPd5LpjgOA9BK6Dd7QRR1US57P/LxACQeqrv4Kgd9DC3YrqG6itzRDUcYRkjla1GFUzgjE0/W+aQeh51ZJWjXcQskHqc6zINZzbKvQWJVDbc+Mii3BmEMCpTpH7P4LBubLIodoxeyHJlCalk+tgKQREYk97yJiqMdPvlQQcKLSvJ0EM1RUrdtTAZI3X7pfLA6IiqiTj+B/ZWA3r0u1JYGiQ+bXPxB6VK5RH9fne0EKT9WH7ZpjDVMxgMBoPBYDAYDAaDwWAwGAwGg8FgMEjzP/g/9vHETwNZAAAAAElFTkSuQmCC" alt=""/>
                             <span class="font-thin">Facebook</span>
                         </button>
                     </div>
 
             </div>
 
                 
                 
 
       
              <img class="w-[450px] hidden md:block" src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset=""/>
 
   
          </div>
      </div>
     </div>
  </>
  )
}

export default Register
