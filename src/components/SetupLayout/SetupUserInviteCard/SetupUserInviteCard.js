import React from "react";
import DeleteUser from "../DeleteUser/DeleteUser";
import StatusIndicator from "../StatusIndicator/StatusIndicator";

class SetupUserInviteCard extends React.Component {
    defineUser = (props) => {
        if (this.props.name.includes("(me)")) {
            return <StatusIndicator color="pink" text="Katıldı"/>
        } else {
            return <div className="mr-24 md:mr-12"><DeleteUser/></div>
        }
    }

    render() {
        return <div
            className='flex flex-col md:flex-row items-end md:items-center  bg-white content-wrapper w-3/5 p-2 my-5 m-auto md:justify-between'>
            <div className='p-2 flex flex-row items-center'>
                <img
                    src={this.props.img}
                    alt='profile pic'
                    className='rounded-full h-auto w-32 p-2 md:p-4'/>
                <div >
                    <div className='p-6'>
                        <h3 className='text-base text-gray-dark'>{this.props.name}</h3>
                        <p className='text-sm text-gray-text'>{this.props.email}</p>
                    </div>
                </div>

            </div>
                <div className="flex flex-col justify-center">
                    {this.defineUser()}
                </div>
        </div>
    }
}

export default SetupUserInviteCard;