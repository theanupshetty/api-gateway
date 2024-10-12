public class InventoryService
{
    private readonly IUnitOfWork _unitOfWork;

    public InventoryService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<Inventory>> GetAllInventories()
    {
        return await _unitOfWork.GetRepository<Inventory>().GetAllAsync();
    }

    public async Task AddInventory(Inventory inventory)
    {
        await _unitOfWork.GetRepository<Inventory>().AddAsync(inventory);
        await _unitOfWork.CommitAsync();
    }

    public async Task UpdateInventory(Inventory inventory)
    {
        _unitOfWork.GetRepository<Inventory>().Update(inventory);
        await _unitOfWork.CommitAsync();
    }

    public async Task DeleteInventory(int id)
    {
        var inventory = await _unitOfWork.GetRepository<Inventory>().GetByIdAsync(id);
        if (inventory != null)
        {
            _unitOfWork.GetRepository<Inventory>().Remove(inventory);
            await _unitOfWork.CommitAsync();
        }
    }
}
