using Microsoft.EntityFrameworkCore;
using Terminal.Backend.Core.Abstractions.Repositories;
using Terminal.Backend.Core.Entities;
using Terminal.Backend.Core.ValueObjects;

namespace Terminal.Backend.Infrastructure.DAL.Repositories;

internal sealed class StepsRepository(TerminalDbContext dbContext) : IStepsRepository
{
    private readonly DbSet<Recipe> _recipes = dbContext.Recipes;

    public async Task<IEnumerable<RecipeStep>> GetFromRecipeAsync(RecipeId id, CancellationToken cancellationToken)
        => (await _recipes
            .Include(r => r.Steps)
            .SingleOrDefaultAsync(r => r.Id == id, cancellationToken))?.Steps ?? new List<RecipeStep>();
}
