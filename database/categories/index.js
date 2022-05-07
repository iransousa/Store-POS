const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getAll = async function() {
    try {
        const allCategories = await prisma.grupos.findMany()
        return allCategories     
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}

const create = async function(data) {
    try {
        const category = await prisma.grupos.create({
            data
        })
        return category     
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}

const edit = async function(data) {
    try {
        const category = await prisma.grupos.update({
            data
        })
        return category     
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}

const remove = async function(id) {
    try {
        const category = await prisma.grupos.delete({
            id
        })
        console.log(category)
        return category     
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}

module.exports ={getAll, create, edit, remove}