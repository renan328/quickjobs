using MySqlConnector;
using quickjobs.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quickjobs.DAO
{
	public class VagaDAO
	{
		public List<VagaDTO> ListarVagas()
		{
			var conexao = ConnectionFactory.Create();
			conexao.Open();

			var query = "SELECT*FROM vagas";
			var comando = new MySqlCommand(query, conexao);
			var dataReader = comando.ExecuteReader();
			var ListaVagas = new List<VagaDTO>();

			while (dataReader.Read())
			{
				var vaga = new VagaDTO();
				vaga.ID = int.Parse(dataReader["ID"].ToString());
				vaga.Descricao = dataReader["descricao"].ToString();
				vaga.Titulo = dataReader["titulo"].ToString();
				vaga.Empresa = dataReader["empresa"].ToString();
				vaga.Icone = dataReader["icone"].ToString();
				vaga.Salario = dataReader["salario"].ToString();
				vaga.Cidade = dataReader["cidade"].ToString();
				vaga.Url = dataReader["url"].ToString();

				ListaVagas.Add(vaga);
			}

			conexao.Close();

			return ListaVagas;
		}
	}
}
