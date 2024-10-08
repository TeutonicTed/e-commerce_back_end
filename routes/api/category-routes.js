const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
      const categoryData = await Category.findAll();
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json({ message: 'Category successfully added' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // Update a category by its `id` value
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (categoryData[0] === 0) {
      // If no category was updated (category with the given id not found)
      return res.status(404).json({ message: 'Category not found' });
    }

    // Category updated successfully
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    // Handle any errors that occur during the update process
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Category successfully deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
