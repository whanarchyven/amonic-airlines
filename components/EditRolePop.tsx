import React from 'react';


interface EditRoleInterface {
    togglePop: () => void
}


const EditRole = ({togglePop}: EditRoleInterface) => {
    return (
        <div className={'h-full h-full backdrop-blur-sm flex bg-opacity-25 bg-black items-center justify-center'}>
            <div className={'w-96 h-96 border-blue border-2 bg-white'}>
                <div className={'border-b-2 flex justify-between border-blue p-2'}>
                    <p className={'font-texgyr font-bold'}>Edit role</p>
                    <div className={'font-texgyr cursor-pointer font-bold'} onClick={() => {
                        togglePop()
                    }}>
                        X
                    </div>
                </div>
                <div className={'px-4'}>
                    <form>
                        <div className={'flex justify-between items-center my-2'}>
                            <label htmlFor={'email'} className={'mr-2 font-verdana text-black'}>Email address: </label>
                            <input name={'email'} className={'w-48 border-2 border-blue p-2 h-8'}/>
                        </div>
                        <div className={'flex justify-between items-center my-2'}>
                            <label htmlFor={'first_name'} className={'mr-2 font-verdana text-black'}>First
                                name: </label>
                            <input name={'first_name'} className={'w-48 border-2 border-blue p-2 h-8'}/>
                        </div>
                        <div className={'flex justify-between items-center my-2'}>
                            <label htmlFor={'last_name'} className={'mr-2 font-verdana text-black'}>Last
                                name: </label>
                            <input name={'last_name'} className={'w-48 border-2 border-blue p-2 h-8'}/>
                        </div>
                        <div className={'flex justify-between items-center my-2'}>
                            <label htmlFor={'office'} className={'mr-2 font-verdana text-black'}>Office: </label>
                            <input name={'office'} className={'w-48 border-2 border-blue p-2 h-8'}/>
                        </div>
                        <div className={'flex items-start justify-between my-2'}>
                            <label htmlFor={'role'} className={'mr-2 font-verdana text-black'}>Role: </label>
                            <div className={'flex w-48 flex-col'}>
                                <div className={'flex items-center'} ><input name={'role'} type={"radio"} value={'user'} id={'role1'} className={'cursor-pointer'}/>
                                    <label htmlFor={'role1'} className={'mr-2 font-verdana text-black'}>User</label>
                                </div>
                                <div className={'flex items-center'} >
                                    <input name={'role'} type={"radio"} value={'admin'} id={'role2'} className={'cursor-pointer'}/>
                                    <label htmlFor={'role2'} className={'mr-2 font-verdana text-black'}>Admin</label>
                                </div>
                            </div>

                        </div>

                        <div className={'w-full flex justify-around mt-4 items-center'}>
                            <button className={'bg-orange p-2 w-32 font-bold font-verdana text-white'}>Save</button>
                            <button className={'bg-orange p-2 w-32 font-bold font-verdana text-white'} onClick={()=>{togglePop()}}>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default EditRole;