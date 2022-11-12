package com.example.demo.Service;

import com.example.demo.Repository.StationRepository;
import com.example.demo.model.Station;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StationService {
	public final StationRepository stationRepository;

	@Autowired
	public StationService(StationRepository stationRepository) {
		this.stationRepository = stationRepository;
	}

	public void NewStation(Station station) {
		stationRepository.save(station);
	}

	public List<Station> getStation() {
		return stationRepository.findAll();
	}

	public void delete_station(long id) {
		stationRepository.deleteById(id);
	}

	public void update_station(Station station, long id) {
		Optional<Station> station1 = stationRepository.findById(id);
		station1.get().setName(station.getName());
		stationRepository.save(station1.get());
	}
}