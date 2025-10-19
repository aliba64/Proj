import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { RecipeCard } from "./components/RecipeCard";
import { Footer } from "./components/Footer";
import { LoginDialog } from "./components/LoginDialog";
import { CatalogSection } from "./components/CatalogSection";
import { SeasonalSection } from "./components/SeasonalSection";
import { RecipeDetailDialog } from "./components/RecipeDetailDialog";
import { recipes } from "./data/recipes";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "catalog" | "seasonal">("home");
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes[0] | null>(null);

  // Enhanced filter recipes based on search query
  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) return recipes;
    
    const query = searchQuery.toLowerCase().trim();
    return recipes.filter(recipe => {
      // Search in title
      if (recipe.title.toLowerCase().includes(query)) return true;
      
      // Search in category
      if (recipe.category.toLowerCase().includes(query)) return true;
      
      // Search in tags
      if (recipe.tags.some(tag => tag.toLowerCase().includes(query))) return true;
      
      // Search in difficulty
      if (recipe.difficulty.toLowerCase().includes(query)) return true;
      
      // Search in time
      if (recipe.time.toLowerCase().includes(query)) return true;
      
      return false;
    });
  }, [searchQuery]);

  return (
    <div 
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1620842947093-284677c6c658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGF0dGVybiUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYwODU2MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header
        onNavigate={setCurrentPage}
        onLoginClick={() => setLoginOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      {currentPage === "home" && (
        <>
          <FilterBar />
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            {searchQuery && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Найдено рецептов: <span className="font-medium">{filteredRecipes.length}</span>
                  {searchQuery && ` по запросу "${searchQuery}"`}
                </p>
              </div>
            )}
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id} 
                    {...recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow">
                <p className="text-gray-600 mb-2">
                  По запросу "{searchQuery}" ничего не найдено
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Попробуйте изменить запрос или искать по категориям, тегам, сложности
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-sm text-gray-900 hover:underline"
                >
                  Сбросить поиск
                </button>
              </div>
            )}
          </main>
        </>
      )}

      {currentPage === "catalog" && <CatalogSection />}
      
      {currentPage === "seasonal" && <SeasonalSection />}

      <Footer />
      
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <RecipeDetailDialog 
        open={!!selectedRecipe} 
        onOpenChange={(open) => !open && setSelectedRecipe(null)}
        recipe={selectedRecipe}
      />
    </div>
  );
}
