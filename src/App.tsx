import { useState, useMemo, useEffect } from "react";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { RecipeCard } from "./components/RecipeCard";
import { Footer } from "./components/Footer";
import { LoginDialog } from "./components/LoginDialog";
import { CatalogSection } from "./components/CatalogSection";
import { SeasonalSection } from "./components/SeasonalSection";
import { RecipeDetailPage } from "./components/RecipeDetailPage";
import { UserPage } from "./components/UserPage";
import { CatalogPage } from "./components/CatalogPage";
import { AboutPage } from "./components/AboutPage";
import { NewsPage } from "./components/NewsPage";
import { ContactsPage } from "./components/ContactsPage";
import { FAQPage } from "./components/FAQPage";
import { SupportPage } from "./components/SupportPage";
import { FeedbackPage } from "./components/FeedbackPage";
import { SeasonalPage } from "./components/SeasonalPage";
import { IngredientSearchPage } from "./components/IngredientSearchPage";
import { AdminPanel } from "./components/AdminPanel";
import { PaginationControls } from "./components/PaginationControls";
import { Toaster } from "./components/ui/sonner";
import { recipes, Recipe } from "./data/recipes";
import backgroundImage from "figma:asset/8b1ef3edb21f919ae1f2c7d0d1340aceb5b126f7.png";

type PageType =
  | "home"
  | "catalog"
  | "seasonal"
  | "recipe"
  | "user"
  | "about"
  | "news"
  | "contacts"
  | "faq"
  | "support"
  | "feedback"
  | "ingredients"
  | "admin";

// Add popularity data to recipes (simulated)
const recipesWithPopularity: (Recipe & {
  views: number;
  favorites: number;
})[] = recipes.map((recipe, index) => ({
  ...recipe,
  views: Math.floor(Math.random() * 5000) + 100,
  favorites: Math.floor(Math.random() * 500) + 10,
}));

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<PageType>("home");
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<
    (typeof recipesWithPopularity)[0] | null
  >(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [favoriteRecipes, setFavoriteRecipes] = useState<Set<number>>(new Set());
  const [recipeStats, setRecipeStats] = useState<
    Map<number, { views: number; favorites: number }>
  >(
    new Map(
      recipesWithPopularity.map((r) => [
        r.id,
        { views: r.views, favorites: r.favorites },
      ]),
    ),
  );
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  // Helper function to convert time string to minutes
  const timeToMinutes = (timeStr: string): number => {
    const hourMatch = timeStr.match(/(\d+)ч/);
    const minMatch = timeStr.match(/(\d+)\s*мин/);

    const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
    const minutes = minMatch ? parseInt(minMatch[1]) : 0;

    return hours * 60 + minutes;
  };

  // Helper function to convert difficulty to number
  const difficultyToNumber = (difficulty: string): number => {
    switch (difficulty.toLowerCase()) {
      case "легко":
        return 1;
      case "средне":
        return 2;
      case "сложно":
        return 3;
      default:
        return 2;
    }
  };

  // Calculate popularity score
  const getPopularityScore = (recipeId: number): number => {
    const stats = recipeStats.get(recipeId);
    if (!stats) return 0;
    // Popularity = views + (favorites * 10) - more weight to favorites
    return stats.views + stats.favorites * 10;
  };

  // Enhanced filter and sort recipes
  const filteredRecipes = useMemo(() => {
    let result = recipesWithPopularity;

    // Apply category filter
    if (categoryFilter) {
      result = result.filter(
        (recipe) => recipe.category === categoryFilter,
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((recipe) => {
        // Search in title
        if (recipe.title.toLowerCase().includes(query))
          return true;

        // Search in category
        if (recipe.category.toLowerCase().includes(query))
          return true;

        // Search in tags
        if (
          recipe.tags.some((tag) =>
            tag.toLowerCase().includes(query),
          )
        )
          return true;

        // Search in difficulty
        if (recipe.difficulty.toLowerCase().includes(query))
          return true;

        // Search in time
        if (recipe.time.toLowerCase().includes(query))
          return true;

        return false;
      });
    }

    // Apply sorting
    if (activeFilter === "popular") {
      result = [...result].sort(
        (a, b) =>
          getPopularityScore(b.id) - getPopularityScore(a.id),
      );
    } else if (activeFilter === "time-asc") {
      result = [...result].sort(
        (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time),
      );
    } else if (activeFilter === "time-desc") {
      result = [...result].sort(
        (a, b) => timeToMinutes(b.time) - timeToMinutes(a.time),
      );
    } else if (activeFilter === "difficulty-asc") {
      result = [...result].sort(
        (a, b) =>
          difficultyToNumber(a.difficulty) -
          difficultyToNumber(b.difficulty),
      );
    } else if (activeFilter === "difficulty-desc") {
      result = [...result].sort(
        (a, b) =>
          difficultyToNumber(b.difficulty) -
          difficultyToNumber(a.difficulty),
      );
    }

    return result;
  }, [searchQuery, activeFilter, categoryFilter, recipeStats]);

  const handleRecipeClick = (
    recipe: (typeof recipesWithPopularity)[0],
  ) => {
    setSelectedRecipe(recipe);
    setCurrentPage("recipe");

    // Increment view count
    setRecipeStats((prev) => {
      const newStats = new Map(prev);
      const current = newStats.get(recipe.id) || {
        views: 0,
        favorites: 0,
      };
      newStats.set(recipe.id, {
        ...current,
        views: current.views + 1,
      });
      return newStats;
    });
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedRecipe(null);
  };

  const handleCategorySelect = (category: string) => {
    setCategoryFilter(category);
    setSearchQuery("");
    setCurrentPageNum(1);
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setCategoryFilter("");
    setCurrentPage("home");
    setCurrentPageNum(1);
  };

  const toggleFavorite = (recipeId: number) => {
    setFavoriteRecipes(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(recipeId)) {
        newFavorites.delete(recipeId);
      } else {
        newFavorites.add(recipeId);
      }
      return newFavorites;
    });
  };

  // Clear category filter when navigating away from home
  useEffect(() => {
    if (currentPage !== "home") {
      setCategoryFilter("");
    }
  }, [currentPage]);

  // Reset page number when filters change
  useEffect(() => {
    setCurrentPageNum(1);
  }, [searchQuery, categoryFilter, activeFilter]);

  // Show recipe detail page
  if (currentPage === "recipe" && selectedRecipe) {
    return (
      <RecipeDetailPage
        recipe={selectedRecipe}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "300px 300px",
        backgroundAttachment: "fixed",
      }}
    >
      <Header
        onNavigate={setCurrentPage}
        onLoginClick={() => setLoginOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCategorySelect={handleCategorySelect}
      />

      {currentPage === "home" && (
        <>
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            {(searchQuery || categoryFilter) && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Найдено рецептов:{" "}
                  <span className="font-medium">
                    {filteredRecipes.length}
                  </span>
                  {searchQuery &&
                    ` по запросу "${searchQuery}"`}
                  {categoryFilter &&
                    ` в категории "${categoryFilter}"`}
                </p>
                {categoryFilter && (
                  <button
                    onClick={() => setCategoryFilter("")}
                    className="text-sm text-gray-900 hover:underline mt-2"
                  >
                    Сбросить фильтр категории
                  </button>
                )}
              </div>
            )}
            {filteredRecipes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredRecipes
                    .slice((currentPageNum - 1) * itemsPerPage, currentPageNum * itemsPerPage)
                    .map((recipe) => (
                      <RecipeCard
                        key={recipe.id}
                        {...recipe}
                        isFavorite={favoriteRecipes.has(recipe.id)}
                        onToggleFavorite={() => toggleFavorite(recipe.id)}
                        onClick={() => handleRecipeClick(recipe)}
                        onTagClick={handleTagClick}
                      />
                    ))}
                </div>
                {filteredRecipes.length > itemsPerPage && (
                  <PaginationControls
                    currentPage={currentPageNum}
                    totalPages={Math.ceil(filteredRecipes.length / itemsPerPage)}
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredRecipes.length}
                    onPageChange={setCurrentPageNum}
                    onItemsPerPageChange={(value) => {
                      setItemsPerPage(value);
                      setCurrentPageNum(1);
                    }}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow">
                <p className="text-gray-600 mb-2">
                  {searchQuery
                    ? `По запросу "${searchQuery}" ничего не найдено`
                    : "Рецепты не найдены"}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Попробуйте изменить запрос или искать по
                  категориям, тегам, сложности
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("");
                  }}
                  className="text-sm text-gray-900 hover:underline"
                >
                  Сбросить поиск
                </button>
              </div>
            )}
          </main>
        </>
      )}

      {currentPage === "catalog" && (
        <CatalogPage 
          onCategoryClick={(category) => {
            handleCategorySelect(category);
            setCurrentPage("home");
          }}
        />
      )}

      {currentPage === "seasonal" && (
        <SeasonalPage 
          onRecipeClick={handleRecipeClick}
          favoriteRecipes={favoriteRecipes}
          onToggleFavorite={toggleFavorite}
          onTagClick={handleTagClick}
        />
      )}

      {currentPage === "ingredients" && (
        <IngredientSearchPage
          onRecipeClick={handleRecipeClick}
          favoriteRecipes={favoriteRecipes}
          onToggleFavorite={toggleFavorite}
          onTagClick={handleTagClick}
        />
      )}

      {currentPage === "user" && (
        <UserPage 
          favoriteRecipes={favoriteRecipes}
          onToggleFavorite={toggleFavorite}
          onTagClick={handleTagClick}
        />
      )}

      {currentPage === "about" && <AboutPage />}

      {currentPage === "news" && <NewsPage />}

      {currentPage === "contacts" && <ContactsPage />}

      {currentPage === "faq" && <FAQPage />}

      {currentPage === "support" && <SupportPage />}

      {currentPage === "feedback" && <FeedbackPage />}

      {currentPage === "admin" && <AdminPanel onBack={() => setCurrentPage("home")} />}

      <Footer onNavigate={setCurrentPage} />

      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
      />

      <Toaster />
    </div>
  );
}