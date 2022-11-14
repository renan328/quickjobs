using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quickjobs.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quickjobs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VagasController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarUsuario()
        {
            VagaDAO vagaDAO = new VagaDAO();
            var vagas = vagaDAO.ListarVagas();

            return Ok(vagas);
        }
    }
}
