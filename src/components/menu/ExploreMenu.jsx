import "../../App.css"
import { menu_list } from '../../images/images'

const ExploreMenu = ({category ,setCategory}) => {
    console.log(category);
    
    return (
        <div className='mx-6'>
            <h2 className='mt-12 text-3xl font-extrabold'>Explore Menu</h2>
            <p className='max-w-[60vw] mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut enim pariatur ut, ipsam est quisquam atque quod provident earum ipsa aliquam ab, nobis vel, alias quae dolore inventore obcaecati.</p>
            <div className='flex gap-10'>
                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index} onClick={()=>{setCategory(prev=>prev===item.menu_name? "All" :item.menu_name)}} className='mt-10 flex flex-col items-center  gap-4'>
                                <img id={category === item.menu_name ?"active" :""} className='h-32 w-32 hover:scale-110  bg-cover rounded-full' src={item.menu_image} alt="" />
                                <div className='font-extrabold text-nowrap'>{item.menu_name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExploreMenu