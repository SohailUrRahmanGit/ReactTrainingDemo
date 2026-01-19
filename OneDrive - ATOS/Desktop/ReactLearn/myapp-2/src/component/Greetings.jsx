const Greetings = ({name}) => {
     return (
      <div>
        <h1> The value from props : {name} </h1>
      </div>
     );
};

const MultipleGreetings  = ({name, wishes}) => {
     return(
          <div><h3> Wish you a Very Happy from props: {wishes} {name} </h3></div>
     );
};

export default Greetings;
export { MultipleGreetings } ;