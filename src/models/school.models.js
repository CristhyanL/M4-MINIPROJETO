export class School{
    constructor(name, InepCode, address, bairro, contact, employees, teachers, classrooms, libraries, laboratories, internet, accessible_bathroom){
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.InepCode = InepCode;
        this.address = address;
        this.bairro = bairro;
        this.contact = contact;
        this.employees = employees;
        this.teachers = teachers;
        this.classrooms = classrooms;
        this.libraries = libraries;
        this.laboratories = laboratories;
        this.internet = internet;
        this.accessible_bathroom = accessible_bathroom;

    }    
}