using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class InventoryController : ControllerBase
{
    private readonly InventoryService _inventoryService;

    public InventoryController(InventoryService inventoryService)
    {
        _inventoryService = inventoryService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var inventories = await _inventoryService.GetAllInventories();
        return Ok(inventories);
    }

    [HttpPost]
    public async Task<IActionResult> AddInventory(Inventory inventory)
    {
        await _inventoryService.AddInventory(inventory);
        return Ok(inventory);
    }

    // Other CRUD actions
}
