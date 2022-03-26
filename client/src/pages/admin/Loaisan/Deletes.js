import axios from 'axios';

class Delete {

    delete(id) {
        axios.delete('/api/loaiSan/delete/' + id)
            .then(() => {
                console.log('Loaisan Deleted Successfully!')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default Delete;