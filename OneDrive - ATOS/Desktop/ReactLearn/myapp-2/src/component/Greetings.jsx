const Greetings = ({name}) => {
     return (
      <div>
        <h1> The user name from props : {name} </h1>
      </div>
     );
};

const MultipleGreetings  = ({name, wishes}) => {
     return(
          <div><h1> Wish you a Very Happy: {wishes} to you Mr.{name} </h1></div>
     );
};

export default Greetings;
export { MultipleGreetings } ;