// Recipe Finder Application JavaScript

class RecipeFinder {
    constructor() {
        this.recipes = [];
        this.commonIngredients = [];
        this.selectedIngredients = [];
        this.favorites = this.loadFavorites();
        this.currentRecipes = [];
        
        this.initializeData();
        this.initializeElements();
        this.bindEvents();
        this.renderIngredientSuggestions();
    }

    initializeData() {
        // Mock data from the provided JSON
        this.recipes = [
            {
                id: 1,
                title: "Creamy Tomato Pasta",
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
                cookingTime: 25,
                difficulty: "Easy",
                servings: 4,
                ingredients: ["tomatoes", "pasta", "cream", "garlic", "onion", "basil", "olive oil", "salt", "pepper"],
                instructions: [
                    "Heat olive oil in a large pan over medium heat",
                    "Sauté diced onion and minced garlic until fragrant",
                    "Add diced tomatoes and cook for 10 minutes",
                    "Stir in cream and simmer for 5 minutes",
                    "Season with salt, pepper, and fresh basil",
                    "Toss with cooked pasta and serve hot"
                ],
                calories: 420,
                protein: "12g",
                carbs: "52g",
                fat: "18g",
                category: "dinner",
                dietary: ["vegetarian"],
                description: "A rich and creamy tomato pasta perfect for a comforting dinner"
            },
            {
                id: 2,
                title: "Chicken Caesar Salad",
                image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400",
                cookingTime: 15,
                difficulty: "Easy",
                servings: 2,
                ingredients: ["chicken breast", "lettuce", "cheese", "bread", "olive oil", "garlic", "lemon", "eggs"],
                instructions: [
                    "Grill seasoned chicken breast until cooked through",
                    "Prepare croutons by toasting cubed bread with olive oil and garlic",
                    "Wash and chop fresh romaine lettuce",
                    "Make Caesar dressing with lemon, egg, and olive oil",
                    "Slice grilled chicken and assemble salad",
                    "Top with parmesan cheese and croutons"
                ],
                calories: 380,
                protein: "35g",
                carbs: "15g",
                fat: "22g",
                category: "lunch",
                dietary: [],
                description: "Fresh and protein-packed Caesar salad with grilled chicken"
            },
            {
                id: 3,
                title: "Chocolate Chip Pancakes",
                image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400",
                cookingTime: 20,
                difficulty: "Easy",
                servings: 3,
                ingredients: ["flour", "milk", "eggs", "butter", "chocolate chips", "sugar", "baking powder", "salt"],
                instructions: [
                    "Mix dry ingredients in a large bowl",
                    "Whisk together milk, eggs, and melted butter",
                    "Combine wet and dry ingredients until just mixed",
                    "Fold in chocolate chips gently",
                    "Cook pancakes on griddle until bubbles form",
                    "Flip and cook until golden brown"
                ],
                calories: 320,
                protein: "8g",
                carbs: "45g",
                fat: "12g",
                category: "breakfast",
                dietary: ["vegetarian"],
                description: "Fluffy pancakes loaded with chocolate chips for a sweet breakfast treat"
            },
            {
                id: 4,
                title: "Vegetable Stir Fry",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
                cookingTime: 15,
                difficulty: "Easy",
                servings: 4,
                ingredients: ["broccoli", "carrots", "bell peppers", "onion", "garlic", "soy sauce", "olive oil", "ginger"],
                instructions: [
                    "Heat oil in a large wok or pan",
                    "Add garlic and ginger, stir fry for 30 seconds",
                    "Add harder vegetables like carrots first",
                    "Add softer vegetables and cook until crisp-tender",
                    "Stir in soy sauce and toss everything together",
                    "Serve immediately over rice or noodles"
                ],
                calories: 180,
                protein: "6g",
                carbs: "25g",
                fat: "8g",
                category: "dinner",
                dietary: ["vegetarian", "vegan"],
                description: "Colorful and nutritious vegetable stir fry with Asian flavors"
            },
            {
                id: 5,
                title: "Banana Smoothie Bowl",
                image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400",
                cookingTime: 10,
                difficulty: "Easy",
                servings: 1,
                ingredients: ["bananas", "milk", "yogurt", "honey", "berries", "granola", "coconut flakes"],
                instructions: [
                    "Freeze bananas overnight for best texture",
                    "Blend frozen bananas with milk and yogurt",
                    "Add honey to taste and blend until smooth",
                    "Pour into bowl and arrange toppings",
                    "Add fresh berries, granola, and coconut flakes",
                    "Serve immediately while cold"
                ],
                calories: 350,
                protein: "12g",
                carbs: "65g",
                fat: "8g",
                category: "breakfast",
                dietary: ["vegetarian"],
                description: "Healthy and refreshing smoothie bowl packed with nutrients"
            },
            {
                id: 6,
                title: "Beef Tacos",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
                cookingTime: 30,
                difficulty: "Medium",
                servings: 6,
                ingredients: ["ground beef", "onion", "garlic", "tomatoes", "lettuce", "cheese", "tortillas", "avocado"],
                instructions: [
                    "Brown ground beef in a large skillet",
                    "Add diced onion and garlic, cook until soft",
                    "Season with taco spices and add diced tomatoes",
                    "Simmer for 10 minutes until flavors blend",
                    "Warm tortillas in microwave or on stovetop",
                    "Assemble tacos with meat, lettuce, cheese, and avocado"
                ],
                calories: 380,
                protein: "25g",
                carbs: "28g",
                fat: "20g",
                category: "dinner",
                dietary: [],
                description: "Delicious homemade beef tacos with fresh toppings"
            },
            {
                id: 7,
                title: "Greek Salad",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
                cookingTime: 15,
                difficulty: "Easy",
                servings: 4,
                ingredients: ["tomatoes", "cucumber", "onion", "cheese", "olives", "olive oil", "lemon", "oregano"],
                instructions: [
                    "Dice tomatoes and cucumber into bite-sized pieces",
                    "Thinly slice red onion and add to vegetables",
                    "Add kalamata olives and crumbled feta cheese",
                    "Drizzle with olive oil and fresh lemon juice",
                    "Season with dried oregano, salt, and pepper",
                    "Toss gently and let flavors marinate for 10 minutes"
                ],
                calories: 220,
                protein: "8g",
                carbs: "12g",
                fat: "18g",
                category: "lunch",
                dietary: ["vegetarian"],
                description: "Fresh Mediterranean salad with feta cheese and olives"
            },
            {
                id: 8,
                title: "Garlic Bread",
                image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400",
                cookingTime: 12,
                difficulty: "Easy",
                servings: 6,
                ingredients: ["bread", "butter", "garlic", "parsley", "salt", "olive oil"],
                instructions: [
                    "Preheat oven to 375°F (190°C)",
                    "Slice bread diagonally without cutting all the way through",
                    "Mix softened butter with minced garlic and parsley",
                    "Spread garlic butter between bread slices",
                    "Wrap in foil and bake for 10 minutes",
                    "Unwrap and bake 2 more minutes for crispy top"
                ],
                calories: 180,
                protein: "4g",
                carbs: "22g",
                fat: "9g",
                category: "snack",
                dietary: ["vegetarian"],
                description: "Crispy and aromatic garlic bread perfect as a side dish"
            }
        ];

        this.commonIngredients = [
            "tomatoes", "onion", "garlic", "chicken", "beef", "cheese", "eggs", "milk", "flour", "butter",
            "olive oil", "salt", "pepper", "lettuce", "carrots", "potatoes", "bread", "rice", "pasta", "yogurt"
        ];
    }

    initializeElements() {
        // Input elements
        this.ingredientInput = document.getElementById('ingredient-input');
        this.addIngredientBtn = document.getElementById('add-ingredient-btn');
        this.clearIngredientsBtn = document.getElementById('clear-ingredients-btn');
        this.findRecipesBtn = document.getElementById('find-recipes-btn');
        
        // Display elements
        this.ingredientSuggestions = document.getElementById('ingredient-suggestions');
        this.selectedIngredientsContainer = document.getElementById('selected-ingredients-container');
        this.ingredientTags = document.getElementById('ingredient-tags');
        this.loadingContainer = document.getElementById('loading-container');
        this.recipeResults = document.getElementById('recipe-results');
        this.recipeGrid = document.getElementById('recipe-grid');
        this.noResults = document.getElementById('no-results');
        this.resultsTitle = document.getElementById('results-title');
        this.sortSelect = document.getElementById('sort-select');
        
        // Modal elements
        this.modal = document.getElementById('recipe-modal');
        this.modalBackdrop = document.getElementById('modal-backdrop');
        this.modalClose = document.getElementById('modal-close');
        this.modalTitle = document.getElementById('modal-title');
        this.modalImage = document.getElementById('modal-image');
        this.modalTime = document.getElementById('modal-time');
        this.modalDifficulty = document.getElementById('modal-difficulty');
        this.modalServings = document.getElementById('modal-servings');
        this.modalCalories = document.getElementById('modal-calories');
        this.modalIngredients = document.getElementById('modal-ingredients');
        this.modalInstructions = document.getElementById('modal-instructions');
        this.modalNutrition = document.getElementById('modal-nutrition');
        this.favoriteBtn = document.getElementById('favorite-btn');
        this.shareBtn = document.getElementById('share-btn');
        
        // Toast container
        this.toastContainer = document.getElementById('toast-container');
    }

    bindEvents() {
        // Ingredient input events
        this.addIngredientBtn.addEventListener('click', () => this.addIngredient());
        this.ingredientInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addIngredient();
            }
        });
        
        // Action buttons
        this.clearIngredientsBtn.addEventListener('click', () => this.clearIngredients());
        this.findRecipesBtn.addEventListener('click', () => this.findRecipes());
        
        // Modal events
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalBackdrop.addEventListener('click', () => this.closeModal());
        this.favoriteBtn.addEventListener('click', () => this.toggleFavorite());
        this.shareBtn.addEventListener('click', () => this.shareRecipe());
        
        // Sort change
        this.sortSelect.addEventListener('change', () => this.sortRecipes());
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }

    renderIngredientSuggestions() {
        this.ingredientSuggestions.innerHTML = this.commonIngredients
            .map(ingredient => `
                <button 
                    type="button" 
                    class="ingredient-suggestion" 
                    data-ingredient="${ingredient}"
                    onclick="recipeFinder.addIngredientFromSuggestion('${ingredient}')"
                >
                    ${this.capitalizeFirst(ingredient)}
                </button>
            `).join('');
    }

    addIngredient() {
        const ingredient = this.ingredientInput.value.trim().toLowerCase();
        if (!ingredient) return;
        
        if (this.selectedIngredients.includes(ingredient)) {
            this.showToast('Ingredient already added', 'info');
            this.ingredientInput.value = '';
            return;
        }
        
        this.selectedIngredients.push(ingredient);
        this.ingredientInput.value = '';
        this.updateSelectedIngredients();
        this.updateSuggestionStates();
        this.showToast(`Added ${this.capitalizeFirst(ingredient)}`, 'success');
    }

    addIngredientFromSuggestion(ingredient) {
        if (this.selectedIngredients.includes(ingredient)) {
            this.removeIngredient(ingredient);
        } else {
            this.selectedIngredients.push(ingredient);
            this.updateSelectedIngredients();
            this.updateSuggestionStates();
            this.showToast(`Added ${this.capitalizeFirst(ingredient)}`, 'success');
        }
    }

    removeIngredient(ingredient) {
        const index = this.selectedIngredients.indexOf(ingredient);
        if (index > -1) {
            this.selectedIngredients.splice(index, 1);
            this.updateSelectedIngredients();
            this.updateSuggestionStates();
            this.showToast(`Removed ${this.capitalizeFirst(ingredient)}`, 'info');
        }
    }

    clearIngredients() {
        this.selectedIngredients = [];
        this.updateSelectedIngredients();
        this.updateSuggestionStates();
        this.hideResults();
        this.showToast('All ingredients cleared', 'info');
    }

    updateSelectedIngredients() {
        if (this.selectedIngredients.length === 0) {
            this.selectedIngredientsContainer.style.display = 'none';
            return;
        }
        
        this.selectedIngredientsContainer.style.display = 'block';
        this.ingredientTags.innerHTML = this.selectedIngredients
            .map(ingredient => `
                <div class="ingredient-tag">
                    ${this.capitalizeFirst(ingredient)}
                    <button 
                        type="button" 
                        class="remove-btn"
                        onclick="recipeFinder.removeIngredient('${ingredient}')"
                        aria-label="Remove ${ingredient}"
                    >
                        ×
                    </button>
                </div>
            `).join('');
    }

    updateSuggestionStates() {
        const suggestions = this.ingredientSuggestions.querySelectorAll('.ingredient-suggestion');
        suggestions.forEach(btn => {
            const ingredient = btn.dataset.ingredient;
            if (this.selectedIngredients.includes(ingredient)) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
    }

    async findRecipes() {
        if (this.selectedIngredients.length === 0) {
            this.showToast('Please add at least one ingredient', 'error');
            return;
        }
        
        this.showLoading();
        
        // Simulate API delay
        await this.delay(1500);
        
        const matchingRecipes = this.getMatchingRecipes();
        this.currentRecipes = matchingRecipes;
        
        this.hideLoading();
        this.displayRecipes(matchingRecipes);
    }

    getMatchingRecipes() {
        return this.recipes
            .map(recipe => {
                const matchCount = recipe.ingredients.filter(ingredient => 
                    this.selectedIngredients.includes(ingredient)
                ).length;
                const matchPercentage = Math.round((matchCount / this.selectedIngredients.length) * 100);
                
                return {
                    ...recipe,
                    matchCount,
                    matchPercentage: matchPercentage > 100 ? 100 : matchPercentage
                };
            })
            .filter(recipe => recipe.matchCount > 0)
            .sort((a, b) => b.matchCount - a.matchCount);
    }

    displayRecipes(recipes) {
        if (recipes.length === 0) {
            this.showNoResults();
            return;
        }
        
        this.hideNoResults();
        this.recipeResults.style.display = 'block';
        this.resultsTitle.textContent = `Found ${recipes.length} recipe${recipes.length === 1 ? '' : 's'}`;
        
        this.recipeGrid.innerHTML = recipes.map(recipe => this.createRecipeCard(recipe)).join('');
        this.recipeResults.classList.add('fade-in');
    }

    createRecipeCard(recipe) {
        const isFavorite = this.favorites.includes(recipe.id);
        const heartIcon = isFavorite ? '❤️' : '🤍';
        
        return `
            <div class="recipe-card" onclick="recipeFinder.openRecipeModal(${recipe.id})">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card__image" loading="lazy">
                <div class="recipe-card__content">
                    <h3 class="recipe-card__title">${recipe.title}</h3>
                    <p class="recipe-card__description">${recipe.description}</p>
                    <div class="recipe-card__meta">
                        <span>⏱️ ${recipe.cookingTime} min</span>
                        <span>👨‍🍳 ${recipe.difficulty}</span>
                        <span>🍽️ ${recipe.servings} servings</span>
                    </div>
                    <div class="recipe-card__badges">
                        <span class="recipe-badge recipe-badge--match">
                            ${recipe.matchPercentage}% match
                        </span>
                        <span class="recipe-badge recipe-badge--difficulty-${recipe.difficulty.toLowerCase()}">
                            ${recipe.difficulty}
                        </span>
                        ${recipe.dietary.map(diet => `
                            <span class="recipe-badge">${this.capitalizeFirst(diet)}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    openRecipeModal(recipeId) {
        const recipe = this.recipes.find(r => r.id === recipeId);
        if (!recipe) return;
        
        this.currentRecipe = recipe;
        this.populateModal(recipe);
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    populateModal(recipe) {
        this.modalTitle.textContent = recipe.title;
        this.modalImage.src = recipe.image;
        this.modalImage.alt = recipe.title;
        this.modalTime.textContent = `${recipe.cookingTime} minutes`;
        this.modalDifficulty.textContent = recipe.difficulty;
        this.modalServings.textContent = recipe.servings;
        this.modalCalories.textContent = recipe.calories;
        
        // Ingredients
        this.modalIngredients.innerHTML = recipe.ingredients
            .map(ingredient => `<li>${this.capitalizeFirst(ingredient)}</li>`)
            .join('');
        
        // Instructions
        this.modalInstructions.innerHTML = recipe.instructions
            .map(instruction => `<li>${instruction}</li>`)
            .join('');
        
        // Nutrition
        this.modalNutrition.innerHTML = `
            <div class="nutrition-item">
                <strong>${recipe.calories}</strong>
                <span>Calories</span>
            </div>
            <div class="nutrition-item">
                <strong>${recipe.protein}</strong>
                <span>Protein</span>
            </div>
            <div class="nutrition-item">
                <strong>${recipe.carbs}</strong>
                <span>Carbs</span>
            </div>
            <div class="nutrition-item">
                <strong>${recipe.fat}</strong>
                <span>Fat</span>
            </div>
        `;
        
        // Update favorite button
        const isFavorite = this.favorites.includes(recipe.id);
        this.favoriteBtn.innerHTML = isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites';
    }

    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
        this.currentRecipe = null;
    }

    toggleFavorite() {
        if (!this.currentRecipe) return;
        
        const recipeId = this.currentRecipe.id;
        const isFavorite = this.favorites.includes(recipeId);
        
        if (isFavorite) {
            this.favorites = this.favorites.filter(id => id !== recipeId);
            this.favoriteBtn.innerHTML = '🤍 Add to Favorites';
            this.showToast('Removed from favorites', 'info');
        } else {
            this.favorites.push(recipeId);
            this.favoriteBtn.innerHTML = '❤️ Remove from Favorites';
            this.showToast('Added to favorites', 'success');
        }
        
        this.saveFavorites();
    }

    shareRecipe() {
        if (!this.currentRecipe) return;
        
        const shareData = {
            title: this.currentRecipe.title,
            text: this.currentRecipe.description,
            url: window.location.href
        };
        
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            const shareText = `${shareData.title}\n\n${shareData.text}\n\nView recipe: ${shareData.url}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showToast('Recipe link copied to clipboard!', 'success');
            }).catch(() => {
                this.showToast('Unable to share recipe', 'error');
            });
        }
    }

    sortRecipes() {
        if (!this.currentRecipes.length) return;
        
        const sortBy = this.sortSelect.value;
        let sortedRecipes = [...this.currentRecipes];
        
        switch (sortBy) {
            case 'time':
                sortedRecipes.sort((a, b) => a.cookingTime - b.cookingTime);
                break;
            case 'difficulty':
                const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
                sortedRecipes.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
                break;
            case 'match':
            default:
                sortedRecipes.sort((a, b) => b.matchCount - a.matchCount);
                break;
        }
        
        this.displayRecipes(sortedRecipes);
    }

    showLoading() {
        this.loadingContainer.classList.remove('hidden');
        this.recipeResults.style.display = 'none';
    }

    hideLoading() {
        this.loadingContainer.classList.add('hidden');
    }

    showNoResults() {
        this.recipeResults.style.display = 'block';
        this.recipeGrid.innerHTML = '';
        this.noResults.classList.remove('hidden');
        this.resultsTitle.textContent = 'No recipes found';
    }

    hideNoResults() {
        this.noResults.classList.add('hidden');
    }

    hideResults() {
        this.recipeResults.style.display = 'none';
        this.currentRecipes = [];
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.textContent = message;
        
        this.toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    loadFavorites() {
        try {
            return JSON.parse(localStorage.getItem('recipeFinder_favorites') || '[]');
        } catch {
            return [];
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem('recipeFinder_favorites', JSON.stringify(this.favorites));
        } catch (error) {
            console.warn('Unable to save favorites to localStorage:', error);
        }
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the application
const recipeFinder = new RecipeFinder();