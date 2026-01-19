import { useState,useEffect } from "react"

const UsersPage = () => {
   
    const [users , setUsers] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentUser = users[currentIndex];
    const [editData, setEditData] = useState({})


const handlePrevious = () => {
        if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    };

    
  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[currentIndex] = { ...currentUser, ...editData };
    setUsers(updatedUsers);
    console.log('User updated:', updatedUsers[currentIndex]);
    setEditData({});
  };

  const handleCancel = () => {
    setEditData({});
  };

 useEffect(() => {
    // define an async function to fetch data
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // call API
        const data = await response.json(); // convert response to JSON
        setUsers(data); // store users in state
        console.log(data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); 
  }, []); 
return (
    <div>
      <h3>User Page</h3>

      {currentUser && (
        <>
          <form>
            <div>
              <label>Name: <strong>{currentUser.name}</strong></label>
            </div>
            <div>
              <label>Username: <strong>{currentUser.username}</strong></label>
            </div>
            <div>
              <label>Email: <strong>{currentUser.email}</strong></label>
            </div>
            <div>
              <label>Phone: <strong>{currentUser.phone}</strong></label>
            </div>
            <div> </div>
            <button type="button" onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
            <button type="button" onClick={handleNext} disabled={currentIndex === users.length - 1}>Next</button>
          </form>

          <h3>Update User</h3>
          <form>
            <div>
              <label>Name: </label>
              <input 
                type="text" 
                name="name" 
                value={editData.name || currentUser.name} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Username: </label>
              <input 
                type="text" 
                name="username" 
                value={editData.username || currentUser.username} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email: </label>
              <input 
                type="email" 
                name="email" 
                value={editData.email || currentUser.email} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Phone: </label>
              <input 
                type="tel" 
                name="phone" 
                value={editData.phone || currentUser.phone} 
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </>
      )}
    </div>
  );
};

export default UsersPage;