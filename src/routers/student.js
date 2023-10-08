const express = require("express");
const router = new express.Router();
const Student = require("./models/user");


// 2: we need to define the router
router.get("/abhijeet", (req, res) => {
    res.send("Hello Abhijeet");
});

// async method to store the data using post method....
router.post("/student", async (req, res) => {

    try {

        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)

    } catch (e) {
        res.status(400).send(e);
    }

})


// get the data or we can say read the data..
router.get("/student", async (req, res) => {

    try {
        const studentData = await Student.find();
        res.status(200).send(studentData);
    } catch (e) {
        res.status(400).send(e);
    }

})


//  get the data using id.
router.get("/student/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const studentData = await Student.findById({ _id });

        if (!studentData) {
            return res.status(200).send(studentData);
        } else {
            res.send(studentData);
        }

    } catch (e) {
        res.status(400).send(e);
    }

})


// update the data by id
router.patch("/student/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        res.status(200).send(updateStudent);
    } catch (e) {
        res.status(400).send(e);
    }

})

// delete student data 
router.delete("/student/:id", async (req, res) => {

    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }

})


module.exports = router;