class CrudService {

    constructor(repository)
    {
        this.repository = repository;
    }

    async create(data)
    {
        try {
            const response = this.repository.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Service')
        }
    }

    async destroy(id)
    {
        try {
            const response = this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Service')
        }
    }

    async get(id)
    {
        try {
            const response = this.repository.get(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Service')
        }
    }
    
    async getAll()
    {
        try {
            const response = this.repository.getAll();
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Service')
        }
    }

    async update(id,data)
    {
        try {
            const response = this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Service')
        }
    }
}

module.exports = CrudService;