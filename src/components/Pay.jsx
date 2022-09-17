import axios from "axios"
import { useState,useEffect } from "react"
import StripeCheckout from "react-stripe-checkout"

const KEY= "pk_test_51LfZ7wE7x33lI2SbErxexQsMjC8uTRqKNK6sN7QhRcGsuNn2LmolQextmCwYppv8GID0wvDW426Pq0Zqh8nzgLJi00OqVPrSHL"

const Pay = () => {

  const [stripeToken,setStripeToken] = useState(null)

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
          tokenId:stripeToken.id,
          amount:20000,
        }
      )

        console.log("EL RES DATA DEL STRIPE",res.data)
        
      } catch (error) {
        console.log(error.response.data)
      }
    };

    stripeToken && makeRequest()
  },[stripeToken])



  return (
    <div
      style ={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
    > 
    <StripeCheckout 
    name="Posada Tienda" 
    image="https://scontent.fmex27-1.fna.fbcdn.net/v/t1.6435-9/163341734_115956527183795_5480567081216859282_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lQDIJX9aFO0AX_Uqgwm&_nc_ht=scontent.fmex27-1.fna&oh=00_AT9Sbbi3F816pL4Tb3MPjrGzN8WWgGBj5fy5jEjMxORxFg&oe=634AC613"
    billingAddress
    shippingAddress
    description="Tu total es del $200"
    amount={20000}
    token={onToken}
    stripeKey={KEY}
    >
    <button style = {{
      border: "none",
      width:120,
      borderRadius:5,
      padding:"20px",
      backgroundColor:"black",
      color:"white",
      fontWeight:"600",
      cursor: "pointer",
    }}
    >
      Pagar ahora
    </button>
    </StripeCheckout>
    </div>
  )
}

export default Pay