const contacts = [
{
title:"Email",
value:"support.skywardtechnologies@gmail.com"
},

{
title:"Phone",
value:"+233 24 399 5107"
},

{
title:"Location",
value:"Ghana"
}

];


export default function ContactSection(){

return (

<section className="py-12">

<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
max-w-7xl
mx-auto
px-6
">


{contacts.map((item)=>(

<div
key={item.title}
className="
bg-white
border
border-slate-100
rounded-xl
shadow-sm
p-6
text-center
"
>

<div className="
mx-auto
w-10
h-10
rounded-full
bg-blue-100
text-blue-600
flex
items-center
justify-center
font-bold
">
+
</div>


<h3 className="mt-4 font-bold text-slate-900">
{item.title}
</h3>


<p className="mt-2 text-slate-600 break-all">
{item.value}
</p>


</div>

))}


</div>

</section>

);

}